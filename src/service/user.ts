import { getManager, getRepository } from "typeorm";
import { User } from "../entity/User";

const getAll = () => {
  return getManager().find(User);
}

export default {
  getAll,
}