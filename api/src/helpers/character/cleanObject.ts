import { CharacterApi } from "../../types/character";

export const cleanArrayApi = (character:any) =>{
  // console.log(character)
  return {
    id: character?.id,
    name: character?.name,
    status: character?.status,
    species: character?.species,
    type: character?.type || 'unknown',
    gender: character?.gender,
    origin: character?.origin?.name || 'unknown',
    location: character?.location?.name,
    image: character.image,
  }
}