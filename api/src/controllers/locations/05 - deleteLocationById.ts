import { Location } from "../../db/db";

export const deleteLocationById = async (id:number) => {
  if(!Number(id)) throw new Error (`The id of location must be a number`);

  const location:any = await Location.findOne({
    where:{
      id:id,
    }
  });
  if(!location) throw new Error (`Don't exist the location id: ${id}`);

  location.deleted = true;
  await location.save();

  const message = {
    message: `The Location of id ${id} was successfully deleted`,
    location:location
  }
  return message;
};