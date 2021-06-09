import { getManager, getRepository } from 'typeorm'
import { User } from '../entity/User'
import { UserModel } from '../interfaces/user'

const getAllUser = async (): Promise<User[]> => {
  return await getManager().find(User)
}

const getUser = async (userId: string): Promise<User | undefined> => {
  return await getRepository(User).findOne(userId)
}

const createUser = async (user: UserModel): Promise<User> => {
  return await getRepository(User).save(user)
}

const updateUser = async (userId: string, user: UserModel): Promise<User> => {
  const existingUser = await getRepository(User).findOne(userId)
  const userToUpdate = { ...existingUser, ...user }
  return await getRepository(User).save(userToUpdate)
}

const deleteUser = async (userId: string): Promise<User | undefined> => {
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
