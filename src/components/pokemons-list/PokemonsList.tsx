import {Grid, Pagination} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../hooks/rtk';
import {pokemonExtraReducers} from '../../rtk/extra-reducers/pokemon.extra.reducers';
import {ChangeEvent, useEffect} from 'react';
import {ITEMS_PER_PAGE_LIMIT} from '../../constants/app';
import ListItem from '../list-item/ListItem';
import {useSearchParams} from 'react-router-dom';
import Preloader from '../preloader/Preloader';

const PokemonsList = () => {
    const {pokemonsPage, isLoading} =
        useAppSelector(state => state.pokemonSlice);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    useEffect(() => {
        const offset = (currentPage - 1) * ITEMS_PER_PAGE_LIMIT;

        dispatch(pokemonExtraReducers.loadPokemonsPage({limit: ITEMS_PER_PAGE_LIMIT, offset}));
    }, [currentPage]);

    const changePage = (event: ChangeEvent<unknown>, newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    return (
        <>
            <Grid container spacing={1} alignItems="stretch" justifyContent="center">
                {isLoading ? (
                    <Preloader />
                ) : (
                    pokemonsPage.results.map((pokemon, i) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={i}>
                            <ListItem pokemon={pokemon} />
                        </Grid>
                    ))
                )}
            </Grid>
            <Pagination
                count={Math.ceil(pokemonsPage.count / ITEMS_PER_PAGE_LIMIT)}
                page={currentPage}
                onChange={changePage}
                sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
            />
        </>
    );
}

export default PokemonsList;
