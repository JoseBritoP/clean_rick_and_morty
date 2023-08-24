import { User } from "../../db/db";
import { UserModel } from "../../types/user";

export const banUser = async (id:number) => {
  // const user = await User.findOne({where:{email}}) as UserModel | any;
  const user = await User.findOne({where:{id}}) as UserModel | any;
  if(!user) throw new Error(`User not found`);

  user.active = true;
  user.banned = true;
  await user.save();

  const message = `The user has been banned successfully!`
  return message;
};