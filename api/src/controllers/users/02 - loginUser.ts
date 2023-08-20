import { User } from "../../db/db";
import { UserType } from "../../types/user";
import { passwordCompare } from "../../utils/bycript.handler";

export const loginUser = async ({email,password}:UserType) => {
  const checkEmailExist:any = await User.findOne({where:{email}});
  if(!checkEmailExist) throw Error (`Email invalidate`);

  const passwordHash = checkEmailExist.password;
  const isCorrect = await passwordCompare(password,passwordHash);
  if(!isCorrect) throw Error(`Password incorrect`);
  return checkEmailExist;
};