import { User } from "../../db/db";
import { Request,Response,NextFunction } from "express";

export const checkBanned = async (req:Request,res:Response,next:NextFunction) => {
  const {email} = req.body;
  try {
    const userId:any = await User.findOne({where:{email}})
    if(userId && userId.banned) throw new Error(`This account was been banned`);
  } catch (error:any) {
    return res.status(403).json({error:error.message});
  }
}