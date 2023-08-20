import { Location } from "../../db/db";
import { getAllLocationsApi } from "./02 - getAllLocationsApi";

export const savingLocationsBDD = async () => {
  const locationsApi = await getAllLocationsApi();
    
  const creationPromises = locationsApi.map((location) => Location.findOrCreate({
    where: {
      name: location.name,
      type: location.type,
      dimension: location.dimension,
    },
  }));
  
  return await Promise.all(creationPromises);
};

export const getAllLocations = async () => {
  const locations = await Location.findAll({
    attributes:["id","name","type","dimension"],
    where:{
      deleted:false,
    },
  });
  if(locations.length === 0){
    await savingLocationsBDD();
    const allLocations = await Location.findAll({
      attributes:["id","name","type","dimension"],
      where:{
        deleted:false,
      },
    });
    return allLocations;
  }
  return locations;
};