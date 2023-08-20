import { Episode } from "../../db/db";
import { getAllEpisodesApi } from "./02 - getAllEpisodesApi";

export const savingEpisodesBDD = async () => {
  const episodesApi = await getAllEpisodesApi();

  const creationPromises = episodesApi.map((episode)=> Episode.findOrCreate({
    where:{
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode
    }
  }));

  return await Promise.all(creationPromises);
};

export const getAllEpisodes = async () => {
  const episodes = await Episode.findAll({
    attributes: ["id","name","air_date","episode"],
    where:{
      deleted:false
    }
  });

  if(episodes.length === 0){
    await savingEpisodesBDD();
    const episodes = await Episode.findAll({
      attributes: ["id","name","air_date","episode"],
      where:{
        deleted:false
      }
    });
    return episodes;
  };

  return episodes;
};