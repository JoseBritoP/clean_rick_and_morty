import { Episode } from "../../db/db";

export const getEpisodeById = async (id:number) => {
  if(!Number(id)) throw new Error (`The id of episode must be a number`);
  const episode = await Episode.findOne({
    attributes:['id','name','air_date','episode'],
    where:{
      id:id,
      deleted:false
    }
  });
  if(!episode) throw Error (`Don't exist the episode id: ${id}`)
  return episode;
};