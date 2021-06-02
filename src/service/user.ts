import { getManager, getRepository } from 'typeorm'
import { User } from '../entity/User'
import { UserModel } from '../interface/user'

const getAllUser = () => {
  return getManager().find(User)
}

const getUser = async (userId: string) => {
  return await getRepository(User).findOne(userId)
}

const createUser = async (user: UserModel) => {
  return await getRepository(User).save(user)
}

const updateUser = async (userId: string, user: UserModel) => {
  const existingUser = await getRepository(User).findOne(userId)
  const userToUpdate = { ...existingUser, ...user }
  return await getRepository(User).save(userToUpdate)
}

const deleteUser = async (userId: string) => {
  const userToDelete = await getRepository(User).findOne(userId)
  if (userToDelete) {
    return await getRepository(User).remove(userToDelete)
  }
}

export default {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
