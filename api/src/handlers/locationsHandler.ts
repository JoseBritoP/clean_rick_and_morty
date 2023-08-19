import { Request,Response } from "express";
// import { ErrorRequestHandler } from "express";
import { getAllLocationsApi } from "../controllers/locations/02 - getAllLocationsApi";
import { getAllLocations } from "../controllers/locations/01 - getAllLocations";

export const getLocations = async (_req:Request,res:Response) => {
  try {
    const locations = await getAllLocations();
    // return res.status(200).json({DIY:'All Locations'})
    return res.status(200).json(locations)
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