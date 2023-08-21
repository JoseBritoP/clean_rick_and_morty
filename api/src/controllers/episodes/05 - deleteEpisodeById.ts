import { Episode } from "../../db/db";

export const deleteEpisodeById = async (id:number) => {
  if(!Number(id)) throw new Error (`The id of episode must be a number`);
  const episode:any = await Episode.findByPk(id);
  if(!episode) throw Error (`Don't exist the episode id: ${id}`)
  episode.deleted = true;
  await episode.save();

  const message = {
    message: `The Episode of id ${id} was successfully deleted`,
    episode:episode
  }
  return message;
};