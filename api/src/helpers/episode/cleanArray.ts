import { EpisodeInterface } from "../../types/episode";

export const cleanArrayApi = (episodes:any) => {
  return episodes.map((episode:EpisodeInterface)=>({
    id: episode.id,
    name:episode.name,
    air_date:episode.air_date,
    episode:episode.episode
  }));
};