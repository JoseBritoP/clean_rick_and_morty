import { User } from "../../db/db";
import { bycrypt } from "../../utils/bycript.handler";


export const createNewUser = async (email:string,password:string) => {
  const checkEmailExist = await User.findOne({where:{email}});
  if(checkEmailExist) throw Error (`The email ${email} already used`);
  const passwordHash = await bycrypt(password)
  const registerUser = await User.create({email,password:passwordHash});
  return registerUser;
};