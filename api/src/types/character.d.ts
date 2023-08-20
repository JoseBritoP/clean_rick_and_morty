export type CharacterAPI = {
  info:    CharacterApiInfo;
  results: CharacterApiResult[];
}

export type CharacterApiInfo = {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export type CharacterApiResult = {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export const enum Gender {
  Female = "Female",
  Genderless = "Genderless",
  Male = "Male",
  Unknown = "unknown",
}

export type Location = {
  name: string;
  url:  string;
}

export const enum Species {
  Alien = "Alien",
  Animal = "Animal",
  Cronenberg = "Cronenberg",
  Disease = "Disease",
  Human = "Human",
  Humanoid = "Humanoid",
  MythologicalCreature = "Mythological Creature",
  Poopybutthole = "Poopybutthole",
  Robot = "Robot",
  Unknown = "unknown",
}

export const enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface CharacterInterface {
  id: number,
  name:string,
  image:string,
  status:Status,
  species: Species,
  gender:Gender,
  type:string,
};

export type CharacterApi = {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episodes: string[];
};