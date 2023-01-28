import WebPush from 'web-push';
import { FastifyInstance } from "fastify";
import { z } from 'zod';

console.log(WebPush.generateVAPIDKeys())

const publicKey = 'BINg7DJxWuURHpeOIH6Jg9OSY-drTUlLHPSqkn2I9Kp6DQ65fl6UX4LoRLicDsSAk9jrMK4Dn19kVOidQYvIr_Q'
const privateKey = '1cRU0IXFpKzXiR6-S1wSaKf_VZW_HWTkPReIa32ayPs'

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    }
  })

  app.post('/push/register', (request, reply) => {
    console.log(request.body)

    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),         
        keys: z.object ({
          p256dh: z.string(),
          auth: z.string(),
        })
      })
    })

    const { subscription } = sendPushBody.parse(request.body)

    setTimeout (() => {
      WebPush.sendNotification(subscription, 'HELLO DO BACKEND')
    }, 5000)

    return reply.status(201).send()
  })
}
