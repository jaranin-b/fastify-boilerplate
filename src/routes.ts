import { FastifyInstance } from 'fastify'
import userController from './controller/user'

const routes = (fastify: FastifyInstance, opts: any, done: any) => {
  fastify.get('/users', userController.getAllUser)
  fastify.get('/users/:id', userController.getUser)
  fastify.post('/users', userController.createUser)
  fastify.put('/users/:id', userController.updateUser)

  done()
}

export default routes
