import {createSlice} from '@reduxjs/toolkit';
import {NamedAPIResource} from 'pokenode-ts';
import {pokemonExtraReducers} from "../../extra-reducers/pokemon.extra.reducers";
import {AxiosError} from "axios";

interface IPokemonsByAbilitySlice {
    pokemonsByAbility: NamedAPIResource[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IPokemonsByAbilitySlice = {
    pokemonsByAbility: [],
    isLoading: false,
    error: null
};

const pokemonsByAbilitySlice = createSlice({
    name: 'pokemonsByAbility',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(pokemonExtraReducers.loadPokemonsByAbility.fulfilled, (state, action) => {
                state.pokemonsByAbility = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadPokemonsByAbility.rejected, (state, action) => {
                console.log(action.payload as AxiosError);
                state.error = 'Ability does not exist';
                state.isLoading = false;
                state.pokemonsByAbility = [];
            })
            .addCase(pokemonExtraReducers.loadPokemonsByAbility.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
    }
});

export default pokemonsByAbilitySlice;
