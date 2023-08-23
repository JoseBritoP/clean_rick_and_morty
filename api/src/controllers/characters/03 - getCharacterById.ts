import { Character,Location } from "../../db/db";
import axios from "axios";
import { cleanArrayApi } from "../../helpers/character/cleanObject";

export const getCharacterByIdBDD = async (id:string)=>{
  const characterBDD = await Character.findByPk(id,{
    include:{
      model:Location,
      attributes:["name","type","dimension"],
      through:{attributes:[]}
    }
  });
  if(!characterBDD) throw new Error (`The character id ${id} not found`);
  return characterBDD;
}

export const getCharacterByIdApi = async (id:string) => {
  const characterApiRaw = (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data

  if(!characterApiRaw) throw new Error(`An error ocurred fetching data character ${id}`);

  const characterInfo = cleanArrayApi(characterApiRaw);
  return characterInfo
}
