export type CharacterT = {
  id:string,
  name:string
  status:string,
  species:string,
  type:string,
  gender:string,
  origin:Location,
  location:Location,
  imagen:string,
  episode:EpisodeT[],
  created:string
};

export type EpisodeT = {
    id:string,
    name:string,
    air_date:string,
    episode:string,
    characters:CharacterT[],
    created:string
}

export type LocationT = {
    id:string,
    name:string,
    type:string,
    dimension:string,
    residents:CharacterT[],
    created:string
}

