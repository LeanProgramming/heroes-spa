import { heroes } from "../data";

export const getHeroById = ( id: string ) => {

    return heroes.find( hero => hero.id === id )
};