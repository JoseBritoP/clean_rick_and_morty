import { LocationInterface } from "../../types/location";
export const cleanArrayApi = (locations:any) =>{
  // console.log(locations)
  return locations.map((location:LocationInterface)=>({
    id: location.id,
    name : location.name,
    type: location.type,
    dimension: location.dimension || 'unknown'
  }))
};