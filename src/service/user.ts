import { getManager, getRepository } from "typeorm";
import { User } from "../entity/User";

const getAll = () => {
  return getManager().find(User);
}

const getOne = (userId: string) => {
  return getRepository(User).findOne(userId);
}

export default {
  getAll,
  getOne,
}