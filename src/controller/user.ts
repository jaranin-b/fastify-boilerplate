import { FastifyReply, FastifyRequest } from 'fastify'
import userService from '../service/user'

const getAllUser = (request: FastifyRequest, reply: FastifyReply) => {
  const users = userService.getAll()
  return users
}

export default { getAllUser }
