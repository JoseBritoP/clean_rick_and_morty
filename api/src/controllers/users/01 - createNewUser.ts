import { User } from "../../db/db";
import { UserType } from "../../types/user";

export const createNewUser = async (email:string,password:string) => {
  console.log(email)
  const checkEmailExist = await User.findOne({where:{email}});
  if(checkEmailExist) throw Error (`The email ${email} already used`);

  const userFormat:UserType = {
    email,
    password
  }
  const registerUser = await User.create(userFormat);

  return registerUser;
};