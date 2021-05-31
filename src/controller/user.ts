import { FastifyReply, FastifyRequest } from 'fastify'
import userService from '../service/user'
interface IQueryParams {
  id: string;
}

const getAllUser = (request: FastifyRequest, reply: FastifyReply) => {
  const users = userService.getAll()
  return users
}

const getUser = (request: FastifyRequest<{
  Params: IQueryParams
}>, reply: FastifyReply) => {
  const userId = request.params.id
  const user = userService.getOne(userId)
  return user
}

export default { getAllUser, getUser }
