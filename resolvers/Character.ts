 import { CharacterT, EpisodeT } from "../types.ts"
 import { LocationT } from "../types.ts";

 const Character = {
    location : async (parent:any):Promise<LocationT> => {
        const location = await fetch (parent.location.url);
        const loca = await location.json();
        const finalLocation = {
            id:loca.id,
            name:loca.name,
            type:loca.type,
            dimension:loca.dimension,
            residents:loca.residents,
            created:loca.created
        }
        return finalLocation;
    },
    origin : async (parent:any):Promise<LocationT | null> => {
        if(parent.origin.url==""){return null}
        const origin = await fetch(parent.origin.url);
        const ori = await origin.json();
        const finalOrigin = {
            id:ori.id,
            name:ori.name,
            type:ori.type,
            dimension:ori.dimension,
            residents:ori.residents,
            created:ori.created
        }
        return finalOrigin;
    },
    episode : (parent:any):Promise<EpisodeT[]> => {
        const episodes = parent.episode.map(async (ch:string)=> {
            const data = await fetch(ch);
            const jsondata = await data.json();
            return {
                id:jsondata.id,
                name:jsondata.name,
                air_date:jsondata.air_date,
                episode:jsondata.episode,
                characters:jsondata.characters,
                created:jsondata.created
            }
        })
        return episodes;
    }

 }

 export default Character;