import {Response,Request,Router } from 'express';

export const episodeRouter = Router();

// Handlers:

import { getEpisodes,getEpisode,postEpisode,updateEpisode,deleteEpisode } from '../handlers/episodesHandler';

//Middlewares:

import { postValidate } from '../middleware/episode/postValidate';
import { matchEpisode } from '../middleware/episode/matchEpisode';

// Enrutado

episodeRouter.get('/',getEpisodes);
episodeRouter.get('/:id',getEpisode);
episodeRouter.post('/',postValidate,matchEpisode,postEpisode);
episodeRouter.patch('/:id',updateEpisode);
episodeRouter.delete('/:id',deleteEpisode);