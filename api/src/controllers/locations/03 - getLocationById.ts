import { Location } from "../../db/db";

export const getLocationById = async (id:number) => {
  if(!Number(id)) throw new Error (`The id of location must be a number`);

  const location = await Location.findOne({where:{id:id}})
  if(!location) throw new Error (`Don't exist the location id: ${id}`);
  return location;
};