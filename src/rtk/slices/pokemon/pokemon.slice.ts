import {createSlice} from '@reduxjs/toolkit';
import {NamedAPIResourceList} from "pokenode-ts";
import {pokemonExtraReducers} from "../../extra-reducers/pokemon.extra.reducers";
import {AxiosError} from "axios";

interface IPokemonSlice {
    pokemonsPage: NamedAPIResourceList;
    isLoading: boolean;
    error: AxiosError | null;
}

const initialState: IPokemonSlice = {
    pokemonsPage: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
    isLoading: false,
    error: null
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(pokemonExtraReducers.loadPokemonsPage.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(pokemonExtraReducers.loadPokemonsPage.fulfilled, (state, action) => {
                state.pokemonsPage = action.payload;
                console.log(state.pokemonsPage);
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadPokemonsPage.rejected, (state, action) => {
                state.error = action.payload as AxiosError;
                state.isLoading = false;
            })
    }
});

export default pokemonSlice;
