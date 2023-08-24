import { Character, Location } from "../../db/db";

export const createCharacter = async (name:string,status:string,species:string,type:string,gender:string,origin:number,location:number,image:string) => {

  const characterFormat = {
    name,
    status,
    species,
    type,
    gender,
    image,    
  }

  const newCharacter:any = await Character.create(characterFormat);

  const originBDD = await Location.findByPk(origin);
  if (!originBDD) throw new Error( 'Origin not found');
  await newCharacter.addLocation(originBDD)
  const locationBDD = await Location.findByPk(location)
  if (!locationBDD) throw new Error( 'Origin not found');
  await newCharacter.addLocation(locationBDD);

  return {
    name:newCharacter.name,
    status: newCharacter.status,
    species: newCharacter.species ,
    type: newCharacter.type    ,
    gender: newCharacter.gender       ,
    image: newCharacter.image         ,
    origin: originBDD,
    location: locationBDD,
  }
};