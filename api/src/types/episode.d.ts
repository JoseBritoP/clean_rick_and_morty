export type EpisodeAPI = {
  info:    EpisodeApiInfo;
  results: EpisodeApiResult[];
};

export type EpisodeApiInfo = {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
};

export type EpisodeApiResult = {
  id?:         number;
  name?:       string;
  air_date?:   string;
  episode?:    string;
  characters?: string[];
  url?:        string;
  created?:    Date;
};

export interface EpisodeInterface {
  id: number
  name:string
  air_date:string
  episode:string
};