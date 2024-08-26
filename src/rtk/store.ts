import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./slices/theme.slice";
import pokemonSlice from "./slices/pokemon/pokemon.slice";
import pokemonByTypeSlice from "./slices/pokemon-by-type/pokemonByType.slice";
import pokemonsByAbilitySlice from "./slices/pokemons-by-ability/pokemonsByAbility.slice";
import pokemonFormSlice from "./slices/pokemon-form/pokemonForm.slice";

export const store = configureStore({
    reducer: {
        themeSlice: themeSlice.reducer,
        pokemonSlice: pokemonSlice.reducer,
        pokemonByTypeSlice: pokemonByTypeSlice.reducer,
        pokemonsByAbilitySlice: pokemonsByAbilitySlice.reducer,
        pokemonFormSlice: pokemonFormSlice.reducer
    }
});