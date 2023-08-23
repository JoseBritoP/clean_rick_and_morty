import { Request,Response } from "express";
// import { ErrorRequestHandler } from "express";
import { getAllCharactersApi } from "../controllers/characters/02 - getAllCharactersApi";
import { getAllCharacters, getCharacterByIdApi,getCharacterByIdBDD,createCharacter } from "../controllers/characters";

export const getCharacters = async (_req:Request,res:Response) => {
  try {
    const characters = await getAllCharacters()
    // return res.status(200).json({DIY:'All characters'})
    return res.status(200).json(characters)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const getCharacter = async (req:Request,res:Response) => {
  // const {id} = req.params;
  const id:any = req.params.id
  try {
    const character = isNaN(id) ? await getCharacterByIdBDD(id) : await getCharacterByIdApi(id);
    return res.status(200).json(character)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const postCharacter = async  (req:Request,res:Response) => {
  const {name, status, species, type, gender, image,origin,location} = req.body
  try {
    const newCharacter = await createCharacter(name, status, species, type, gender,origin,location,image)
    return res.status(201).json(newCharacter)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const updateCharacter = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Update character from id ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const deleteCharacter = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Delete character id: ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};