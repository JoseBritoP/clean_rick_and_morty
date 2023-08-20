import { CharacterApi } from "../../types/character";

export const cleanArrayApi = (characters:any) => {
  return characters.map((character:CharacterApi)=>({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin:{
      name: character?.origin?.name || '',
      url: character?.origin?.url || '',
    },
    location:{
     name: character?.location.name,
     url: character?.location.url, 
    },
    image: character.image,
    episodes:[...new Set(character.episodes)],
  }))
};