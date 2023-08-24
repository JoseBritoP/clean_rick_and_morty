import z from "zod";
import { CharacterType } from "../types/character";

const characterScheme = z.object({
  name: z.string({
    invalid_type_error:'Character name must be a string',
    required_error: 'Character name is required'
  }),
  status: z.enum(['Alive','Dead','unknown'],{
    required_error:'Character status is required',
    invalid_type_error: 'Character status must be one of enum(Alive, Dead,unknown)'
  }),
  species: z.enum(['Alien','Anumal','Cronenberg','Disease','Human','Humanoid','MythologicalCreature','Poopybutthole','Robot','unknown'],{
    required_error:'Character species is required',
    invalid_type_error: 'Character species must be one of enum(Alive, Dead,unknown)'
  }),
  type: z.string({
    required_error:"Character type is required",
    invalid_type_error: 'Character type must be a string'
  }),
  gender: z.enum(['Female','Genderless','Male','unkown'],{
    required_error:'Character gender is required',
    invalid_type_error: 'Character gender must be one of enum(Female, Genderless, Male , unknown )'
  }),
  origin: z.number().min(1).max(300),
  location: z.number().min(1).max(300),
  image: z.string({
    required_error:"Character image is required",
    invalid_type_error: 'Character image must be a string'
  }).url(),
})

export const validateCharacter = (object:CharacterType) => {
  return characterScheme.safeParseAsync(object)
}
export const validateParcialCharacter = (object:CharacterType) => {
  return characterScheme.partial().safeParseAsync(object)
}