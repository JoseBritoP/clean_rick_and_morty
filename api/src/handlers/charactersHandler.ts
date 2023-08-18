import { Request,Response } from "express";
// import { ErrorRequestHandler } from "express";

export const getCharacters = (req:Request,res:Response) => {
  try {
    return res.status(200).json({DIY:'All characters'})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const getCharacter = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY: `get character by id: ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const postCharacter = (req:Request,res:Response) => {
  try {
    return res.status(201).json({DIY:'post character'})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const updateCharacter = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Update character from id ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const deleteCharacter = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Delete character id: ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};