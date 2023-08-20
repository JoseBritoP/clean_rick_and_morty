import { Episode } from "../../db/db";

export const getEpisodeById = async (id:number) => {
  const episode = await Episode.findByPk(id);
  if(!episode) throw Error (`Don't exist the episode id: ${id}`)
  return episode;
};