import { Character, Location } from "../../db/db";
import { getAllCharactersApi } from "./02 - getAllCharactersApi";

export const savingCharactersBDD = async () => {
  try {
    const charactersApi = await getAllCharactersApi();
    const charactersFormat = charactersApi.map((character)=>({
      name: character?.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image
    }));
    console.log(charactersFormat)
    for( const characterFormat of charactersFormat){
      const {location,origin} = characterFormat;
      const character:any = await Character.create(characterFormat);
      // Location
      const originInBDD = await Location.findOne({where:{name:origin}})
      // if(originInBDD.length === 0) throw new Error(`Error origin`)
      if(!originInBDD) throw new Error(`Error origin`)
      await character.addLocation(originInBDD);
      await character.save()
      // const locationInBDD = await Location.findAll({where:{name:location}});
      // if(locationInBDD.length === 0) throw new Error(`Error location`)
      // const locations = [...originInBDD,...locationInBDD];
      // if(locations.length === 0) throw new Error(`Error locations`)
      // await character.addLocations(locations);
      // await character.save()
    }
  } catch (error:any) {
    throw new Error(error.message);
  }
};

export const getAllCharacters = async () => {
  const characters = await Character.findAll({
    include:{
      model:Location,
      attributes:["id","name","type","dimension"],
      through:{attributes:[]}
    }
  });
  if(characters.length === 0){
    await savingCharactersBDD();
    const characters = await Character.findAll({
      include:{
        model:Location,
        attributes:["id","name","type","dimension"],
        through:{attributes:[]}
      }
    });
    return characters
  }
  return characters
};