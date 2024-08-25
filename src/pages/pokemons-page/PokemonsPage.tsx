import {useTitle} from "../../hooks/useTitle";
import {ChangeEvent, useEffect} from 'react';
import {HEADER_HEIGHT} from "../../constants/styles";
import PokemonsList from "../../components/pokemons-list/PokemonsList";
import Container from '@mui/material/Container';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAppDispatch} from "../../hooks/rtk";
import {useSearchParams} from "react-router-dom";
import {ITEMS_PER_PAGE_LIMIT} from "../../constants/app";
import {pokemonExtraReducers} from "../../rtk/extra-reducers/pokemon.extra.reducers";

const PokemonsPage = () => {
    useTitle('PokeWiki | Pokemons');

    const notify = () => {
        toast.info('To navigate to a specific Pokémon page, click on its image');
    };

    useEffect(() => {
        notify();
    }, []);

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
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px` }}>
            <PokemonsList currentPage={currentPage} changePage={changePage} isSearching={false}/>
            <ToastContainer />
        </Container>
    );
}

export default PokemonsPage;