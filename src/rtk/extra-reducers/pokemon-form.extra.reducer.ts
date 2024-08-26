import {createAsyncThunk} from "@reduxjs/toolkit";
import {PokemonForm} from "pokenode-ts";
import {apiMainClient} from "../../api/api.clients";

const loadFormByName = createAsyncThunk<PokemonForm, string>(
    'pokemonForm/loadFormByName',
    async (formName, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiMainClient.pokemon.getPokemonFormByName(formName);
            return fulfillWithValue(response);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const pokemonFormExtraReducers = {
    loadFormByName
}