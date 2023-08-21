import { User } from "../../db/db";
import { UserType } from "../../types/user";
import { passwordCompare } from "../../utils/bycript.handler";
import { genereateToken } from "../../utils/jwt.handler";

export const loginUser = async ({email,password}:UserType) => {
  const checkEmailExist:any = await User.findOne({where:{email}});
  if(!checkEmailExist) throw Error (`Email invalidate`);

  const passwordHash = checkEmailExist.password;
  const isCorrect = await passwordCompare(password,passwordHash);
  if(!isCorrect) throw Error(`Password incorrect`);

  const token = await genereateToken(checkEmailExist.id)

  const data = {
    token,
    user:{
      id: checkEmailExist.id,
      email :  checkEmailExist.email
    },
  }
  // return checkEmailExist;
  return data;
};