import { Request,Response } from "express";
// import { ErrorRequestHandler } from "express";
import { getAllLocations,getLocationById,createLocation} from "../controllers/locations";
export const getLocations = async (_req:Request,res:Response) => {
  try {
    const locations = await getAllLocations();
    // return res.status(200).json({DIY:'All Locations'})
    return res.status(200).json(locations)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const getLocation = async (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    const location = await getLocationById(+id)
    return res.status(200).json(location)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const postLocation = async  (req:Request,res:Response) => {
  const { name, type, dimension} = req.body;
  try {
    const newLocation = await createLocation(name, type, dimension)
    return res.status(201).json(newLocation)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const updateLocation = async (req:Request,res:Response)=> {
  const {id} = req.params;
  const {name,type,dimension} = req.body
  try {
    // const editedLocation = await patchLocation(+id,name,type,dimension)
    // res.status(200).json(editedLocation);
    return res.status(200).json({DIY:`Updated the location by id: ${id} with new ${name}, ${type},${dimension} `})
  } catch (error:any) {
    res.status(404).json({error: error.message});
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