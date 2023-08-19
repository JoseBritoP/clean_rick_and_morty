import { Location } from "../../db/db";
import { getAllLocationsApi } from "./02 - getAllLocationsApi";

export const getAllLocations = async () => {

  const locations = await Location.findAll();
  if(locations.length === 0){

    const locationsApi = await getAllLocationsApi();
    
    const creationPromises = locationsApi.map((location) =>
    Location.findOrCreate({
      where: {
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
      },
    })
    );
    
    await Promise.all(creationPromises);
    
    const allLocations = await Location.findAll();
    return allLocations;
  }

  return locations;
};