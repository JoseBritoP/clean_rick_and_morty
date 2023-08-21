import { Request,Response,NextFunction } from "express";
import { verifyToken } from "../../utils/jwt.handler";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request {
  user?: string | JwtPayload
}

export const checkJwt = (req:RequestExt,res:Response,next:NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`);
    if(!isUser) res.status(401).json({message:'INCORRECT SESSION'});
    req.user = isUser;
    next();
  } catch (error:any) {
    // return res.status(401).json(({error:error.message}))
    return res.status(400).json(({message: "INCORRECT SESSION"}));
  }
};