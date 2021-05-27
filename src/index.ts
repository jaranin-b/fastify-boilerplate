import fastify, { FastifyInstance } from 'fastify'
import routes from './routes'

interface IQuerystring {
  username: string
  password: string
}

interface IHeaders {
  'h-Custom': string
}

const server: FastifyInstance = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register(routes)

server.listen(8080, '0.0.0.0', (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
