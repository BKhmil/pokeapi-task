import Container from "@mui/material/Container/Container";
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import {useEffect} from "react";
import {pokemonExtraReducers} from "../../rtk/extra-reducers/pokemon.extra.reducers";
import {useParams} from "react-router-dom";
import PokemonsList from "../../components/pokemons-list/PokemonsList";
import Guide from "../../components/guide/Guide";
import {useTitle} from "../../hooks/useTitle";

const SearchByTypePage = () => {
    useTitle('PokeWiki | Search - by type');

    const {isLoading, error, pokemonsByType} = useAppSelector(state => state.pokemonByTypeSlice);
    const dispatch = useAppDispatch();

    const {type} = useParams();

    useEffect(() => {
        type && dispatch(pokemonExtraReducers.loadPokemonsByType(type));
    }, [type]);

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <PokemonsList
                withPagination={false}
                isLoading={isLoading}
                error={error}
                currentPage={1}
                pokemonsList={pokemonsByType}
                changePage={() => {}}
                pokemonsPage={null}
            >
                <Guide />
            </PokemonsList>
        </Container>
    );
}

export default SearchByTypePage;