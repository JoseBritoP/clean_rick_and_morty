import z from 'zod';
import { EpisodeType } from '../types/episode';

const episodeScheme = z.object({
  name: z.string({
    invalid_type_error:'Episode name must be a string',
    required_error: 'Episode name is required'
  }),
  air_date: z.string({
    invalid_type_error:"Episode air_date must be a String",
    required_error : "Episode air_date Required"
  }),
  episode: z.string({
    invalid_type_error :"Episode of the episode must be a string like 'Season 01 Episode 01' ",
    required_error  : "Episode Of The episode Is Required"
  })
})

export const validateEpisode = (object:EpisodeType) => {
  return episodeScheme.safeParseAsync(object);
};
export const validateParcialEpisode = (object:EpisodeType) => {
  return episodeScheme.partial().safeParseAsync(object);
};