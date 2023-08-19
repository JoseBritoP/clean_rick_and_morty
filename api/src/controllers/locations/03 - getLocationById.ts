import { Location } from "../../db/db";

export const getLocationById = async (id:string) => {
  const location = await Location.findOne({where:{id:id}})
  if(!location) throw new Error (`Don't exist the location id: ${id}`);
  return location;
};