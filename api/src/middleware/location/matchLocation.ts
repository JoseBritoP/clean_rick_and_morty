import { Request,Response,NextFunction } from "express";
import { Location } from "../../db/db";

export const matchLocation = async (req:Request,res:Response,next:NextFunction) => {
  const {name} = req.body;
  try {
    const locationExist = await Location.findOne({
      where:{
        name:name
      }
    });
    if(locationExist) throw new Error(`There is already a location name: ${name}`);
    next();
  } catch (error:any) {
    return res.status(400).json({error: error.message});
  }
};