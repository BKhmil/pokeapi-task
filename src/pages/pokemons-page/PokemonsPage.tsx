import {useTitle} from "../../hooks/useTitle";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import {useEffect} from "react";
import {pokemonExtraReducers} from "../../rtk/extra-reducers/pokemon.extra.reducers";

const PokemonsPage = () => {
    useTitle('PokeWiki | Pokemons');

    const {pokemonsPage} =
        useAppSelector(state => state.pokemonSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonExtraReducers.loadPokemonsPage({limit: 20, offset: 0}));
    }, []);

    return (
        <div>
            {
                pokemonsPage.results.map((value, i) => <div key={i}>{value.name}</div>)
            }
        </div>
    );
}

export default PokemonsPage;