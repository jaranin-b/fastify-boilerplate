import { FastifyInstance } from 'fastify'
import userController from './controller/user'

const routes = (fastify: FastifyInstance, opts: any, done: any) => {
  fastify.get('/users', userController.getAllUser)

  done()
}

export default routes
