import { hash,compare } from "bcryptjs";

export const bycrypt = async (password:string) => {
  const passwordHash = await hash(password,8)
  return passwordHash;
};

export const passwordCompare = () => {};