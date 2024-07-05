import { CharacterT, EpisodeT } from "../types.ts"
import { LocationT } from "../types.ts";

const Location = {
    residents : async (parent:any):Promise<CharacterT[]> => {
        const residents = parent.residents.map(async (elem:any)=> {
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
        return residents;
    }
}


export default Location;