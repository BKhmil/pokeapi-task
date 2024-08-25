import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./slices/theme.slice";
import pokemonSlice from "./slices/pokemon/pokemon.slice";
import pokemonByTypeSlice from "./slices/pokemon-by-type/pokemonByTypeSlice";

export const store = configureStore({
    reducer: {
        themeSlice: themeSlice.reducer,
        pokemonSlice: pokemonSlice.reducer,
        pokemonByTypeSlice: pokemonByTypeSlice.reducer
    }
});