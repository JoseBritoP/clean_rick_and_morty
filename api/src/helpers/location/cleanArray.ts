export const cleanArrayApi = (locations:any) =>{
  // console.log(locations)
  return locations.map((location:any)=>({
    id: location.id,
    name : location.name,
    type: location.type,
    dimension: location.dimension || 'unknown'
  }))
};