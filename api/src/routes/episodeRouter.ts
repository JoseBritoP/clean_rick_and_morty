import {Response,Request,Router } from 'express';

export const episodeRouter = Router();

// Handlers:

import { getEpisodes,getEpisode,postEpisode,updateEpisode,deleteEpisode } from '../handlers/episodesHandler';

//Middlewares:

// 

// Enrutado

episodeRouter.get('/',getEpisodes);
episodeRouter.get('/:id',getEpisode);
episodeRouter.post('/',postEpisode);
episodeRouter.patch('/:id',updateEpisode);
episodeRouter.delete('/:id',deleteEpisode);