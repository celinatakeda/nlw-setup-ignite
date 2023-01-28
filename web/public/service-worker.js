self.addEventListener('push', function (event) {
  const body = event.data?.text() ?? ''

  event.waitUntil(
    self.ServiceWorkerRegistration.showNotification('Habits', {
      body,
    })
  )
})