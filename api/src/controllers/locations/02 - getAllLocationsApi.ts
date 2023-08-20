import axios from "axios";
import { LocationsAPI, LocationApiResult, LocationInterface } from "../../types/location";
import { cleanArrayApi } from "../../helpers/location/cleanArray";

export const getAllLocationsApi = async (): Promise<LocationInterface[]> => {
  const pages: number[] = [1, 2, 3, 4, 5, 6, 7];
  const promises: Promise<{ data: LocationsAPI }>[] = pages.map((page) => axios.get(`https://rickandmortyapi.com/api/location?page=${page}`));

  const responses = await Promise.all(promises);

  const locationsInfo: LocationApiResult[] = responses.flatMap((response) => response.data.results);

  const cleanLocationsInfo: LocationInterface[] = cleanArrayApi(locationsInfo);

  return cleanLocationsInfo;
};
