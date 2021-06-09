import { FastifyRequest } from 'fastify'
import { UserModel } from '../interfaces/user'
import { userService } from '../services'
import { User } from '../entity/User'

interface UserParams {
  id: string
}

const getAllUser = (): Promise<User[]> => {
  const users = userService.getAllUser()
  return users
}

const getUser = (
  request: FastifyRequest<{
    Params: UserParams
  }>
): Promise<User | undefined> => {
  const userId = request.params.id
  const user = userService.getUser(userId)
  return user
}

const createUser = (
  request: FastifyRequest<{
    Body: UserModel
  }>
): Promise<User | undefined> => {
  const userModel = request.body
  const user = userService.createUser(userModel)
  return user
}

const updateUser = (
  request: FastifyRequest<{
    Params: UserParams
    Body: UserModel
  }>
): Promise<User | undefined> => {
  const userId = request.params.id
  const userToUpdate = request.body
  const user = userService.updateUser(userId, userToUpdate)
  return user
}

const deleteUser = (
  request: FastifyRequest<{
    Params: UserParams
  }>
): Promise<User | undefined> => {
  const userId = request.params.id
  const user = userService.deleteUser(userId)
  return user
}

export default { getAllUser, getUser, createUser, updateUser, deleteUser }
