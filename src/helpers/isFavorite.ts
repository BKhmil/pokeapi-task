import {NamedAPIResource} from "pokenode-ts";

export const isFavorite = (pokemon: NamedAPIResource, pokemonsList: NamedAPIResource[]): boolean => {
    return pokemonsList.includes(pokemon);
}