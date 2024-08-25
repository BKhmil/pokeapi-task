import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiMainClient} from "../../api/api.clients";
import {NamedAPIResourceList, Pokemon} from "pokenode-ts";
import {IRequestPageParams} from "../../models/request-page-params.interface";
import {AxiosError} from 'axios';

const loadPokemonsPage = createAsyncThunk<NamedAPIResourceList, IRequestPageParams>(
    'pokemonSlice/loadPokemonsPage',
    async (params, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiMainClient.pokemon.listPokemons(params.offset, params.limit);
            return fulfillWithValue(response);
        } catch (e) {
            console.log(e);
            return rejectWithValue(e as AxiosError);
        }
    }
);

const loadSinglePokemonByName = createAsyncThunk<Pokemon, string>(
    'pokemonSlice/loadSinglePokemonByName',
    async (name, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiMainClient.pokemon.getPokemonByName(name);
            return fulfillWithValue(response);
        } catch (e) {
            console.log(e);
            return rejectWithValue(e as AxiosError);
        }
    }
);

export const pokemonExtraReducers = {
    loadPokemonsPage,
    loadSinglePokemonByName
}