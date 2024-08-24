import {Grid, Pagination} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../hooks/rtk';
import {pokemonExtraReducers} from '../../rtk/extra-reducers/pokemon.extra.reducers';
import {ChangeEvent, useEffect} from 'react';
import {ITEMS_PER_PAGE_LIMIT} from '../../constants/app';
import ListItem from '../list-item/ListItem';
import {useSearchParams} from 'react-router-dom';
import Preloader from '../preloader/Preloader';
import { getImageById } from '../../helpers/getImageById';
import { extractPokemonId } from '../../helpers/extractPokemonId';

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

    const changePage = (e: ChangeEvent<unknown>, newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    return (
        <>
            <Grid container spacing={2} alignItems="stretch" justifyContent="center">
                {isLoading ? (
                    <Preloader />
                ) : (
                    pokemonsPage.results.map(pokemon => {
                        const id = extractPokemonId(pokemon.url);
                        const imageUrl = getImageById(id);
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={3} key={id}>
                                <ListItem name={pokemon.name} imageUrl={imageUrl} />
                            </Grid>
                        );
                    })
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
