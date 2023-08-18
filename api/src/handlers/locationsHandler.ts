import { Request,Response } from "express";
// import { ErrorRequestHandler } from "express";

export const getLocations = (req:Request,res:Response) => {
  try {
    return res.status(200).json({DIY:'All Locations'})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const getLocation = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY: `get Location by id: ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const postLocation = (req:Request,res:Response) => {
  try {
    return res.status(201).json({DIY:'post Location'})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const updateLocation = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Update Location from id ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const deleteLocation = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Delete Location id: ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};