import { FastifyInstance } from 'fastify'
import { getUserController } from './controller'

const routes = (fastify: FastifyInstance, opts: any, done: any) => {
  fastify.get('/user', getUserController)

  done()
}

export default routes
