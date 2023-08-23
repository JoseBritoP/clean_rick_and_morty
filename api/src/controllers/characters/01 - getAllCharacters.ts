import { Character, Location } from "../../db/db";
import { getAllCharactersApi } from "./02 - getAllCharactersApi";


export const getAllCharacters = async () => {
  const characters = await Character.findAll({
    include:{
      model:Location,
      attributes:["id","name","type","dimension"],
      through:{attributes:[]}
    }
  });

  const charactersApi = await getAllCharactersApi();

  const Allcharacters = [...charactersApi,...characters]
  return Allcharacters
};