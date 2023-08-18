import { Router } from 'express';

export const characterRouter = Router();

// Handlers:
// const getCharactersHandler  : RequestHandler<any>   = async (req , res) => {};

import { getCharacter,getCharacters,postCharacter,updateCharacter,deleteCharacter } from '../handlers/charactersHandler';

//Middlewares:

// 

// Enrutado

characterRouter.get('/',getCharacters);
characterRouter.get('/:id',getCharacter);
characterRouter.post('/',postCharacter);
characterRouter.patch('/:id',updateCharacter);
characterRouter.delete('/:id',deleteCharacter);