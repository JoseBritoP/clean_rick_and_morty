import { CharacterApi } from "../../types/character";

export const cleanArrayApi = (characters:any) => {
  // console.log(characters.map((char)=> char.episodes))
  return characters.map((character:CharacterApi)=>{
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character?.origin?.name || '',
      location: character?.location.name,
      image: character.image,
    }
  })
};