import { Location } from "../../db/db";
import { LocationType,LocationInterface } from "../../interfaces/location";

export const createLocation = async (name:string, type:string, dimension:string) =>{
  const locationFormat:LocationType = {
    name,
    type,
    dimension
  };

  const newLocation = await Location.create(locationFormat);
  return newLocation
};