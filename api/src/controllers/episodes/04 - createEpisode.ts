import { Episode } from "../../db/db";
import { EpisodeType } from "../../types/episode";
import { Model } from "sequelize";

export const createEpisode = async(name:string,air_date:string,episode:string) => {

  const episodeFormat:EpisodeType = {
    name,air_date,episode
  };

  const newEpisode:Model<EpisodeType> = await Episode.create(episodeFormat);
  return newEpisode
}