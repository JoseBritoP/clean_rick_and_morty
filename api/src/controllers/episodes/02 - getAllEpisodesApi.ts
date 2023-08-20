import axios from 'axios';
import { EpisodeAPI,EpisodeInterface,EpisodeApiResult } from '../../types/episode';
import { cleanArrayApi } from '../../helpers/episode/cleanArray';
export const getAllEpisodesApi = async() => {
  const pages:number[] = [1,2,3];
  const promises: Promise<{data:EpisodeAPI}>[] = pages.map((page)=> axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`));

  const responses = await Promise.all(promises);

  const episodesInfo: EpisodeApiResult[] = responses.flatMap((response)=> response.data.results)
  
  const cleanEpisodesInfo: EpisodeInterface[] = cleanArrayApi(episodesInfo);
  return  cleanEpisodesInfo;
};