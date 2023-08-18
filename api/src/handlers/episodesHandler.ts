import { Request,Response } from "express";
// import { ErrorRequestHandler } from "express";

export const getEpisodes = (req:Request,res:Response) => {
  try {
    return res.status(200).json({DIY:'All episodes'})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const getEpisode = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY: `get episode by id: ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const postEpisode = (req:Request,res:Response) => {
  try {
    return res.status(201).json({DIY:'post episode'})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const updateEpisode = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Update episode from id ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const deleteEpisode = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Delete episode id: ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};