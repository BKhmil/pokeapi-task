import {createSlice} from '@reduxjs/toolkit';
import {PokemonForm} from 'pokenode-ts';
import {AxiosError} from "axios";
import {pokemonFormExtraReducers} from "../../extra-reducers/pokemon-form.extra.reducer";

interface IPokemonFormSlice {
    pokemonForm: PokemonForm | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: IPokemonFormSlice = {
    pokemonForm: null,
    isLoading: false,
    error: null
};

const pokemonFormSlice = createSlice({
    name: 'pokemonForm',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(pokemonFormExtraReducers.loadFormByName.fulfilled, (state, action) => {
                state.pokemonForm = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonFormExtraReducers.loadFormByName.rejected, (state, action) => {
                console.log(action.payload as AxiosError);
                state.error = 'Pokemon\'s form loading error';
                state.isLoading = false;
                state.pokemonForm = null;
            })
            .addCase(pokemonFormExtraReducers.loadFormByName.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
    }
});

export default pokemonFormSlice;