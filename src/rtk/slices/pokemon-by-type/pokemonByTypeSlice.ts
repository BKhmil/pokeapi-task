import {createSlice, isPending} from '@reduxjs/toolkit';
import { NamedAPIResource } from 'pokenode-ts';
import {pokemonExtraReducers} from "../../extra-reducers/pokemon.extra.reducers";
import {AxiosError} from "axios";

interface IPokemonByTypeSlice {
    pokemonsByType: NamedAPIResource[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IPokemonByTypeSlice = {
    pokemonsByType: [],
    isLoading: false,
    error: null
};

const pokemonByTypeSlice = createSlice({
    name: 'pokemonsByType',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(pokemonExtraReducers.loadPokemonsByType.fulfilled, (state, action) => {
                state.pokemonsByType = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadPokemonsByType.rejected, (state, action) => {
                console.log(action.payload as AxiosError);
                state.error = 'Pokemons by type loading Error';
                state.isLoading = false;
                state.pokemonsByType = [];
            })
            .addMatcher(isPending(pokemonExtraReducers.loadPokemonsByType), state => {
                state.isLoading = true;
                state.error = null;
            })
    }
});

export default pokemonByTypeSlice;
