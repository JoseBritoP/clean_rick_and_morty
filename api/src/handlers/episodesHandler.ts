import { Request,Response } from "express";
// import { ErrorRequestHandler } from "express";
// import { getAllEpisodesApi } from "../controllers/episodes/02 - getAllEpisodesApi";
import { getAllEpisodes,getEpisodeById,createEpisode,deleteEpisodeById} from "../controllers/episodes";

export const getEpisodes = async (_req:Request,res:Response) => {
  try {
    const episodes = await getAllEpisodes();
    return res.status(200).json(episodes)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const getEpisode = async (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    const episode = await getEpisodeById(+id)
    return res.status(200).json(episode)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const postEpisode = async (req:Request,res:Response) => {
  const {name,air_date,episode} = req.body;

  try {
    const newEpisode = await createEpisode(name,air_date,episode)
    return res.status(201).json(newEpisode)
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const updateEpisode = (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    return res.status(200).json({DIY:`Update episode from id ${id}`})
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};

export const deleteEpisode = async (req:Request,res:Response) => {
  const {id} = req.params;
  try {
    const deletedEpisode = await deleteEpisodeById(+id)
    // return res.status(200).json({DIY:`Delete episode id: ${id}`})
    return res.status(200).json(deletedEpisode);
  } catch (error:any) {
    return res.status(404).json({error: error.message});
  }
};