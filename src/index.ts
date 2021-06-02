import fastify, { FastifyInstance } from 'fastify'
import fastifyEnv from 'fastify-env'
import routes from './routes'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
    ENV_NAME: {
      type: 'string',
      default: 'dev',
    },
  },
}

const options = {
  confKey: 'config', // optional, default: 'config'
  schema: schema,
  dotenv: {
    path: `${process.cwd()}/.env`,
    debug: true,
  },
}
declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: number
    }
  }
}

// type orm connection
createConnection()
  .then(async (connection) => {
    const server: FastifyInstance = fastify()

    server.get('/ping', async (request, reply) => {
      return 'pong\n'
    })

    server.register(fastifyEnv, options)
    server.register(routes)

    server.listen(8080, '0.0.0.0', (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(server.config)
      console.log(`Server listening at ${address}`)
    })
  })
  .catch((error) => console.log(error))
