import { Request,Response,NextFunction } from "express";
import { Character } from "../../db/db";

export const matchCharacterName = async (req:Request,res:Response,next:NextFunction) => {
  const {name} = req.body;
  try {
    const characterBDD = await Character.findOne({where:{name:name}});
    if(characterBDD) throw new Error(`Already exist a character called '${name}'`);
    next();
  } catch (error:any) {
    return res.status(400).json({error: error.message});
  }
};