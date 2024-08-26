import {createSlice, isPending, PayloadAction} from '@reduxjs/toolkit';
import {NamedAPIResource, NamedAPIResourceList, Pokemon} from "pokenode-ts";
import {pokemonExtraReducers} from "../../extra-reducers/pokemon.extra.reducers";
import {LocalStorageItems} from "../../../enums/local-storage-items.enum";

interface IPokemonSlice {
    pokemonsPage: NamedAPIResourceList;
    isLoading: boolean;
    error: string | null;
    singlePokemon: Pokemon | null;
    favorites: NamedAPIResource[];
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
    singlePokemon: null,
    favorites: []
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        retrieveData(state) {
            const item = localStorage.getItem(LocalStorageItems.FAVORITES_POKEMONS);
            const favorites: NamedAPIResource[] = [];

            if (item) {
                favorites.push(...JSON.parse(item));
            } else {
                localStorage.setItem(LocalStorageItems.FAVORITES_POKEMONS, JSON.stringify([]));
            }

            state.favorites = [...favorites];
        },
        addToFavorites(state, action: PayloadAction<NamedAPIResource>) {
            const newArr = [...state.favorites, action.payload];
            localStorage.setItem(LocalStorageItems.FAVORITES_POKEMONS, JSON.stringify(newArr));

            state.favorites = [...newArr];
        },
        removeFromFavorites(state, action: PayloadAction<NamedAPIResource>) {
            const newArr = [...state.favorites.filter(elem => elem.name !== action.payload.name)];
            localStorage.setItem(LocalStorageItems.FAVORITES_POKEMONS, JSON.stringify(newArr));

            state.favorites = [...newArr];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(pokemonExtraReducers.loadPokemonsPage.fulfilled, (state, action) => {
                state.pokemonsPage = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadPokemonsPage.rejected, (state, action) => {
                console.log(action.payload);
                state.error = 'Page loading Error';
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadSinglePokemonByName.fulfilled, (state, action) => {
                state.singlePokemon = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(pokemonExtraReducers.loadSinglePokemonByName.rejected, (state, action) => {
                state.error = 'Pokemon loading Error';
                console.log(action.payload);
                state.isLoading = false;
                state.singlePokemon = null;
            })
            .addMatcher(isPending(pokemonExtraReducers.loadPokemonsPage,
                pokemonExtraReducers.loadSinglePokemonByName
            ), state => {
                state.isLoading = true;
                state.error = null;
            })
    }
});

export const pokemonSliceActions = {...pokemonSlice.actions}

export default pokemonSlice;
