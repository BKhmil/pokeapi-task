import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./slices/theme.slice";
import pokemonSlice from "./slices/pokemon/pokemon.slice";

export const store = configureStore({
    reducer: {
        themeSlice: themeSlice.reducer,
        pokemonSlice: pokemonSlice.reducer
    }
});