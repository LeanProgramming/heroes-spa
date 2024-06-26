import { heroes } from "../data";

export const getHeroesByName = (name: any = '') => {
    
    name = name.toLowerCase().trim();

    if( name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes( name )
    )
};