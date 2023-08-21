import { Request,Response,NextFunction } from "express";
import { validateUser } from "../../schemes/UserScheme";

export const auth = async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await validateUser(req.body);
    if(!result.success) throw Error(JSON.stringify(result.error));

    next();

  } catch (error:any) {
    return res.status(400).json({ error: JSON.parse(error.message) });
  }
};