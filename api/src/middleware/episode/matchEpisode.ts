import { Request,Response,NextFunction } from "express";
import { Episode } from "../../db/db";

export const matchEpisode = async (req:Request,res:Response,next:NextFunction) => {
  const {name,episode} = req.body;
  try {
    const episodeExist = await Episode.findOne({
      where:{
        name:name
      }
    });
    if(episodeExist) throw new Error(`There is already exist a episode name: ${name}`);
    next();
  } catch (error:any) {
    return res.status(400).json({error: error.message});
  }
};