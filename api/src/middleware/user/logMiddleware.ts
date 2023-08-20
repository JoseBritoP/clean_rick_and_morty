import {Request,Response,NextFunction} from 'express';

export const logMiddleware = (req:Request,res:Response,next:NextFunction) => {
  const header = req.headers;
  console.log(header);
  const userAgent = header['user-agent'];
  console.log(userAgent);
  next();
};