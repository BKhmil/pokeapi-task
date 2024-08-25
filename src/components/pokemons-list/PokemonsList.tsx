import {Grid, Pagination} from '@mui/material';
import {useAppSelector} from '../../hooks/rtk';
import {ChangeEvent, FC} from 'react';
import {ITEMS_PER_PAGE_LIMIT} from '../../constants/app';
import ListItem from '../list-item/ListItem';
import Preloader from '../preloader/Preloader';
import {getImageById} from '../../helpers/getImageById';
import {extractPokemonId} from '../../helpers/extractPokemonId';
import ErrorBox from '../error-box/ErrorBox';
import {useParams} from "react-router-dom";

interface IProps {
    currentPage: number;
    isSearching: boolean;
    changePage: (e: ChangeEvent<unknown>, newPage: number) => void;
}

const PokemonsList: FC<IProps> = ({currentPage, changePage, isSearching}) => {
    const {pokemonsPage, isLoading, error} =
        useAppSelector(state => state.pokemonSlice);
    const {pokemonsByType, isLoading: typeListLoading, error: typeListError} =
        useAppSelector(state => state.pokemonByTypeSlice);
    const {type} = useParams();


    return (
        <>
            <Grid container spacing={2} alignItems="stretch" justifyContent="center">
                {!isSearching && isLoading && <Preloader />}
                {!isSearching && error && <ErrorBox message={error} />}
                {!isSearching && pokemonsPage && pokemonsPage.results.map(pokemon => {
                    const id = extractPokemonId(pokemon.url);
                    const imageUrl = getImageById(id);
                    return (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={id}>
                            <ListItem name={pokemon.name} imageUrl={imageUrl} />
                        </Grid>
                    );
                })}
                {isSearching && typeListLoading && <Preloader />}
                {isSearching && typeListError && <ErrorBox message={`Type ${type} does not exist`} />}
                {isSearching && pokemonsByType && pokemonsByType.map(pokemon => {
                    const id = extractPokemonId(pokemon.url);
                    const imageUrl = getImageById(id);
                    return (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={id}>
                            <ListItem name={pokemon.name} imageUrl={imageUrl} />
                        </Grid>
                    );
                })}
            </Grid>
            {!isSearching && <Pagination
                count={Math.ceil(pokemonsPage.count / ITEMS_PER_PAGE_LIMIT)}
                page={currentPage}
                onChange={changePage}
                sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
            />}
        </>
    );
}

export default PokemonsList;
