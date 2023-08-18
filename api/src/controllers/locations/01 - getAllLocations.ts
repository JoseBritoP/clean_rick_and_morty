import { Location } from "../../db/db";
import { getAllLocationsApi } from "./02 - getAllLocationsApi";
export const getAllLocations = async () => {
  const locationsApi = await getAllLocationsApi();
  
};