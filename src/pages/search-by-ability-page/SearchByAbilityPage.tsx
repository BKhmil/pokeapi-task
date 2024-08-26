import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {pokemonExtraReducers} from "../../rtk/extra-reducers/pokemon.extra.reducers";
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import PokemonsList from "../../components/pokemons-list/PokemonsList";
import Container from "@mui/material/Container/Container";
import Guide from "../../components/guide/Guide";
import {useTitle} from "../../hooks/useTitle";

const SearchByAbilityPage = () => {
    useTitle('PokeWiki | Search - by ability');

    const {isLoading, error, pokemonsByAbility} = useAppSelector(state => state.pokemonsByAbilitySlice);
    const dispatch = useAppDispatch();

    const {ability} = useParams();

    useEffect(() => {
        ability && dispatch(pokemonExtraReducers.loadPokemonsByAbility(ability));
    }, [ability]);

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <PokemonsList
                withPagination={false}
                isLoading={isLoading}
                error={error}
                currentPage={1}
                pokemonsList={pokemonsByAbility}
                changePage={() => {}}
                pokemonsPage={null}
            >
                <Guide />
            </PokemonsList>
        </Container>
    );
}

export default SearchByAbilityPage;