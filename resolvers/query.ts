import { GraphQLError } from "graphql";
import { CharacterT } from "../types.ts";

export const Query = {
    character: async (
        _: unknown,
        args: { id: string },
    ): Promise<CharacterT> => {
        const url = `https://rickandmortyapi.com/api/character/${args.id}`;
        const character = await fetch(url);
        const ch = await character.json();
        const data2 = {
            id: ch.id,
            name: ch.name,
            status: ch.status,
            species: ch.species,
            type: ch.type,
            gender: ch.gender,
            origin: ch.origin,
            location: ch.location,
            imagen: ch.image,
            episode: ch.episode,
            created: ch.created,
        };
        return data2;
    },
    charactersByIds: async (
        _: unknown,
        args: { ids: string[] },
    ): Promise<any> => {
        const data = args.ids.map(async (elem: any) => {
            const url = `https://rickandmortyapi.com/api/character/${elem}`;
            const character = await fetch(url);
            const ch = await character.json();
            const data2 = {
                id: ch.id,
                name: ch.name,
                status: ch.status,
                species: ch.species,
                type: ch.type,
                gender: ch.gender,
                origin: ch.origin,
                location: ch.location,
                imagen: ch.image,
                episode: ch.episode,
                created: ch.created,
            };
            return data2;
        });
        return data;
    },
};
