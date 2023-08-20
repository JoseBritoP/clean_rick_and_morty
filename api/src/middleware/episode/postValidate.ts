import { Request,Response,NextFunction } from "express";
import { validateEpisode } from "../../schemes/EpisodeScheme";

export const postValidate = async (req:Request,res:Response,next:NextFunction) => {
  // console.log(req.body)
  try {
    const result = await validateEpisode(req.body);
    // console.log(result)
    if(!result.success) {
      // console.log(result.error)
      throw new Error (JSON.stringify(result.error))
    };
    // console.log(result.data)
    next();
  } catch (error:any) {
    return res.status(400).json({ error: JSON.parse(error.message) });
  }
};