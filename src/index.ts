import fastify, { FastifyInstance } from 'fastify'
import fastifyEnv from 'fastify-env'
import routes from './routes'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './entity/User'

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
      // this should be same as the confKey in options
      // specify your typing here
    }
  }
}

interface IQuerystring {
  username: string
  password: string
}

interface IHeaders {
  'h-Custom': string
}

// type orm
createConnection()
  .then(async (connection) => {
    console.log('Inserting a new user into the database...')
    const user = new User()
    user.firstName = 'Timber'
    user.lastName = 'Saw'
    user.age = 25
    await connection.manager.save(user)
    console.log('Saved a new user with id: ' + user.id)

    console.log('Loading users from the database...')
    const users = await connection.manager.find(User)
    console.log('Loaded users: ', users)

    console.log('Here you can setup and run express/koa/any other framework.')
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
