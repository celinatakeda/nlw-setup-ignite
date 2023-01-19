# Back-end API RESTfull
Construindo o backend com Node.js.

## Criando projeto
```
  npm init -y
``` 

## Instalando frameworks
```
  npm install fastify 
```

## Instalando o typescript
```
  npm install typescript -D
```

## Rodar
```
  npx tsc --init
```

## Instalando dependencias para poder rodar o typescript
```
  npm i tsx -D
```

## Rodar
```
  npx tsx src/server.ts
```

## Configurando no package.json
```
  "scripts": {
    "dev": "tsx watch src/server.ts"
  },
```

## Rodar 
```
  npm run dev
```

## Configurando o Prisma
Instalando o prisma
```
  npm i -D prisma
```

Instalando o prisma client
```
  npm i @prisma/client
```

Rodar prisma
```
  npx prisma init --datasource-provider SQLite
```

Rodar 
```
  npx prisma migrate dev
```

Abrir um navegador do banco de dados
```
  npx prisma studio
```

## Configurando CORS
Mecanismo de segurança.

Quais aplicações vão poder acessar o backend

Instalando fastify cors

Permitir que o frontend acesse os dados do backend
```
  npm i @fastify/cors
```

Instalando prisma erd

Gerador de diagramas

npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

## Rodar
npx prisma generate

## Criando SEAD
Popular de banco de dados, ou seja, cria um banco de dados ficticio para não deixar o banco de dados vazio.

## Rodar
npx prisma db seed

Instalando biblioteca zod, dayjs

npm i zod

npm i dayjs

## Links
https://www.npmjs.com/package/prisma-erd-generator

