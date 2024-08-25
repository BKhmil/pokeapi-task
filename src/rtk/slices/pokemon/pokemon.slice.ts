import {createSlice, isPending} from '@reduxjs/toolkit';
import {NamedAPIResourceList, Pokemon} from "pokenode-ts";
import {pokemonExtraReducers} from "../../extra-reducers/pokemon.extra.reducers";
import {AxiosError} from "axios";

interface IPokemonSlice {
    pokemonsPage: NamedAPIResourceList;
    isLoading: boolean;
    error: AxiosError | null;
    singlePokemon: Pokemon | null;
}

const initialState: IPokemonSlice = {
    pokemonsPage: {
        count: 0,
        next: null,
        previous: null,
        results: []
    },
    isLoading: false,
    error: null,
    singlePokemon: null
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(pokemonExtraReducers.loadPokemonsPage.fulfilled, (state, action) => {
                state.pokemonsPage = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadPokemonsPage.rejected, (state, action) => {
                state.error = action.payload as AxiosError;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadSinglePokemonByName.fulfilled, (state, action) => {
                state.singlePokemon = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadSinglePokemonByName.rejected, (state, action) => {
                state.error = action.payload as AxiosError;
                state.isLoading = false;
            })
            .addMatcher(isPending(pokemonExtraReducers.loadPokemonsPage, pokemonExtraReducers.loadSinglePokemonByName), state => {
                state.isLoading = true;
                state.error = null;
            })
    }
});

export default pokemonSlice;
