import { FastifyReply, FastifyRequest } from 'fastify'

const getUserController = (request: FastifyRequest, reply: FastifyReply) => {
  console.log('get user')
}

export { getUserController }
