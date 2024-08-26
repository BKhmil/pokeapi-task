import {useTitle} from "../../hooks/useTitle";
import {ChangeEvent, useEffect} from 'react';
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import PokemonsList from "../../components/pokemons-list/PokemonsList";
import Container from '@mui/material/Container';
import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import {useSearchParams} from "react-router-dom";
import {ITEMS_PER_PAGE_LIMIT} from "../../constants/app";
import {pokemonExtraReducers} from "../../rtk/extra-reducers/pokemon.extra.reducers";
import Guide from "../../components/guide/Guide";

const PokemonsPage = () => {
    useTitle('PokeWiki | Pokemons');

    const {isLoading, error, pokemonsPage} = useAppSelector(state => state.pokemonSlice);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    useEffect(() => {
        const offset = (currentPage - 1) * ITEMS_PER_PAGE_LIMIT;

        dispatch(pokemonExtraReducers.loadPokemonsPage({limit: ITEMS_PER_PAGE_LIMIT, offset}));
    }, [currentPage]);

    const changePage = (e: ChangeEvent<unknown>, newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <PokemonsList
                withPagination={true}
                isLoading={isLoading}
                error={error}
                currentPage={currentPage}
                pokemonsList={null}
                changePage={changePage}
                pokemonsPage={pokemonsPage}
            />
            <Guide />
        </Container>
    );
}

export default PokemonsPage;