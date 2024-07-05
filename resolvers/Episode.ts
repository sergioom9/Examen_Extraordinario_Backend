import { CharacterT, EpisodeT } from "../types.ts"
import { LocationT } from "../types.ts";

const Episode = {
    characters : async (parent:any):Promise<CharacterT[]> => {
        console.log(parent)
        const episodes = parent.characters.map(async (elem:string)=> {
            const data = await fetch(elem);
            const ch = await data.json();
            const data2 = {
                id :ch.id,
                name:ch.name,
                status:ch.status,
                species:ch.species,
                type:ch.type,
                gender:ch.gender,
                origin:ch.origin,
                location:ch.location,
                imagen:ch.image,
                episode:ch.episode,
                created:ch.created
            }
            return data2;
        })
        return episodes;
    }
}

export default Episode;