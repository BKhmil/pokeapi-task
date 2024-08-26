import {Grid, Pagination} from '@mui/material';
import {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from 'react';
import {ITEMS_PER_PAGE_LIMIT} from '../../constants/app';
import ListItem from '../list-item/ListItem';
import Preloader from '../preloader/Preloader';
import {getImageById} from '../../helpers/getImageById';
import {extractPokemonId} from '../../helpers/extractPokemonId';
import ErrorBox from '../error-box/ErrorBox';
import {NamedAPIResource, NamedAPIResourceList} from "pokenode-ts";

interface IProps extends PropsWithChildren {
    currentPage: number;
    withPagination: boolean;
    changePage?: (e: ChangeEvent<unknown>, newPage: number) => void;
    isLoading: boolean;
    error: string | null;
    pokemonsPage: NamedAPIResourceList | null;
    pokemonsList: NamedAPIResource[] | null;
}

const PokemonsList: FC<IProps> = (
    {
        currentPage,
        changePage,
        withPagination,
        isLoading,
        error,
        pokemonsList,
        pokemonsPage,
        children
    }) => {

    return (
        <>
            <Grid container spacing={2} alignItems="stretch" justifyContent="center">
                {isLoading && <Preloader />}
                {error && <ErrorBox message={error} />}
                {pokemonsPage && pokemonsPage.results.map(pokemon => {
                    const id = extractPokemonId(pokemon.url);
                    return (
                        <PokemonGridItem key={id} pokemon={pokemon} id={id} />
                    );
                })}
                {pokemonsList && pokemonsList.map(pokemon => {
                    const id = extractPokemonId(pokemon.url);
                    return (
                        <PokemonGridItem key={id} pokemon={pokemon} id={id} />
                    );
                })}
            </Grid>
            {withPagination && pokemonsPage && changePage && <Pagination
                count={Math.ceil(pokemonsPage.count / ITEMS_PER_PAGE_LIMIT)}
                page={currentPage}
                onChange={changePage}
                sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
            />}
            {children}
        </>
    );
}

type TProps = {pokemon: NamedAPIResource, id: string};

const PokemonGridItem: FC<TProps> = ({ pokemon, id }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            const url = await getImageById(id);
            setImageUrl(url);
        };

        loadImage();
    }, [id]);

    return (
        <Grid item xs={12} sm={6} md={3} lg={3}>
            <ListItem pokemon={pokemon} imageUrl={imageUrl} />
        </Grid>
    );
};

export default PokemonsList;
