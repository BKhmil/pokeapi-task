import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiMainClient} from "../../api/api.clients";
import {NamedAPIResourceList} from "pokenode-ts";
import {IRequestPageParams} from "../../models/request-page-params.interface";

const loadPokemonsPage = createAsyncThunk<NamedAPIResourceList, IRequestPageParams>(
    'pokemonSlice/loadPokemonsPage',
    async (params, {fulfillWithValue, rejectWithValue}) => {
        try {
            const response = await apiMainClient.pokemon.listPokemons(params.offset, params.limit);
            return fulfillWithValue(response);
        } catch (e) {
            console.log(e);
            return rejectWithValue(e as Error);
        }
    }
);

export const pokemonExtraReducers = {
    loadPokemonsPage
}