import axios from 'axios';
import { CharacterAPI,CharacterApiResult,CharacterInterface } from '../../types/character';
import { cleanArrayApi } from '../../helpers/character/cleanArray';

export const getAllCharactersApi = async ():Promise<CharacterInterface[]> => {
  const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];

  const promises:Promise <{data:CharacterAPI}>[] = pages.map((page)=> axios.get(`https://rickandmortyapi.com/api/character?page=${page}`));

  const responses = await Promise.all(promises);

  const characterInfo: CharacterApiResult[] = responses.flatMap((response)=>response.data.results);

  const cleanCharactersInfo: CharacterInterface[] = cleanArrayApi(characterInfo);

  return cleanCharactersInfo;
};