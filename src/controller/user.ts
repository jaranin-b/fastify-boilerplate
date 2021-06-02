import { FastifyReply, FastifyRequest } from 'fastify'
import { UserModel } from '../interface/user'
import userService from '../service/user'

interface UserParams {
  id: string
}

const getAllUser = (request: FastifyRequest, reply: FastifyReply) => {
  const users = userService.getAllUser()
  return users
}

const getUser = (
  request: FastifyRequest<{
    Params: UserParams
  }>,
  reply: FastifyReply
) => {
  const userId = request.params.id
  const user = userService.getUser(userId)
  return user
}

const createUser = (
  request: FastifyRequest<{
    Body: UserModel
  }>,
  reply: FastifyReply
) => {
  const userModel = request.body
  const user = userService.createUser(userModel)
  return user
}

const updateUser = (
  request: FastifyRequest<{
    Params: UserParams
    Body: UserModel
  }>,
  reply: FastifyReply
) => {
  const userId = request.params.id
  const userToUpdate = request.body
  const user = userService.updateUser(userId, userToUpdate)
  return user
}

const deleteUser = (
  request: FastifyRequest<{
    Params: UserParams
  }>,
  reply: FastifyReply
) => {
  const userId = request.params.id
  const user = userService.deleteUser(userId)
  return user
}

export default { getAllUser, getUser, createUser, updateUser, deleteUser }
