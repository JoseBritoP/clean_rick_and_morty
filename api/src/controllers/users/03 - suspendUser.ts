import { User } from "../../db/db";
import { UserModel } from "../../types/user";

export const suspendUser = async (id:number) => {
  const user = await User.findOne({where:{id}}) as UserModel | any;
  if(!user) throw new Error(`User not found`);

  if(!user.active) throw new Error (`Your account is already suspend`);

  user.active = false;
  await user.save();

  if(!user.active && user.banned) throw new Error (`Your account was been banned`);

  const message = `Your account was suspend successfully`;
  return message;
};