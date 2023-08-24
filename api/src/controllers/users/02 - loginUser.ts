import { User } from "../../db/db";
import { UserTest, UserType, UserModel, UserToken } from "../../types/user";
import { passwordCompare } from "../../utils/bycript.handler";
import { generateToken } from "../../utils/jwt.handler";

export const loginUser = async ({ email, password }: UserType): Promise<UserTest> => {
  const checkEmailExist = await User.findOne({ where: { email } }) as UserModel | any;
  if (!checkEmailExist) throw new Error(`Email not found`);

  const passwordHash = checkEmailExist.password;
  const isCorrect = await passwordCompare(password, passwordHash);
  if (!isCorrect) throw new Error(`Password incorrect`);

  const token = await generateToken(checkEmailExist.id);

  if(!checkEmailExist.active){
    const data: UserTest = {
      token,
      user: {
        id: checkEmailExist.id,
        email: checkEmailExist.email,
        suspend: true
      },
    };
  
    return data;
  }

  const data: UserTest = {
    token,
    user: {
      id: checkEmailExist.id,
      email: checkEmailExist.email,
    },
  };

  return data;
};
