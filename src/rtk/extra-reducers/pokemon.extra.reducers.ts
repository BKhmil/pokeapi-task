import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiMainClient} from "../../api/api.clients";
import {NamedAPIResource, NamedAPIResourceList, Pokemon} from "pokenode-ts";
import {IRequestPageParams} from "../../models/request-page-params.interface";

const loadPokemonsPage = createAsyncThunk<NamedAPIResourceList, IRequestPageParams>(
    'pokemonSlice/loadPokemonsPage',
    async (params, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiMainClient.pokemon.listPokemons(params.offset, params.limit);
            return fulfillWithValue(response);
        } catch (e) {
            console.log(e);
            return rejectWithValue(e);
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
            return rejectWithValue(e);
        }
    }
);

const loadPokemonsByType = createAsyncThunk<NamedAPIResource[], string>(
    'pokemonsByType/loadPokemonsByType',
    async (typeName, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiMainClient.pokemon.getTypeByName(typeName);
            return fulfillWithValue(response.pokemon.map(p => p.pokemon));
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const loadPokemonsByAbility = createAsyncThunk<NamedAPIResource[], string>(
    'pokemonsByAbility/loadPokemonsByAbility',
    async (abilityName, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiMainClient.pokemon.getAbilityByName(abilityName);
            return fulfillWithValue(response.pokemon.map(p => p.pokemon));
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

export const pokemonExtraReducers = {
    loadPokemonsPage,
    loadSinglePokemonByName,
    loadPokemonsByType,
    loadPokemonsByAbility
}