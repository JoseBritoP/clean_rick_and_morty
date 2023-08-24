import { Router } from 'express';

export const characterRouter = Router();

// Handlers:
// const getCharactersHandler  : RequestHandler<any>   = async (req , res) => {};

import { getCharacter,getCharacters,postCharacter,updateCharacter,deleteCharacter } from '../handlers/charactersHandler';

//Middlewares:

import { postValidate } from '../middleware/character/postValidate';
import { matchCharacterName } from '../middleware/character/matchName';

// Enrutado

characterRouter.get('/',getCharacters);
characterRouter.get('/:id',getCharacter);
characterRouter.post('/',postValidate,matchCharacterName,postCharacter);
characterRouter.patch('/:id',updateCharacter);
characterRouter.delete('/:id',deleteCharacter);