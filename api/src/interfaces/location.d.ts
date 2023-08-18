export type LocationsAPI = {
  info:    LocationApiInfoInfo;
  results: Result[];
}

export type LocationApiInfo = {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export type LocationApiResult = {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    Date;
}


export interface LocationInterface {
  id:number,
  name:string;
  type: string,
  dimension: string,
}