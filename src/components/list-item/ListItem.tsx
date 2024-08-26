import {FC} from 'react';
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import {AppRoutes} from '../../enums/app-routes.enum';
import { SessionStorageItems } from '../../enums/session-storage-items.enum';
import {NamedAPIResource} from "pokenode-ts";
import css from './ListItem.module.css';
import {isFavorite} from "../../helpers/isFavorite";
import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import {pokemonSliceActions} from "../../rtk/slices/pokemon/pokemon.slice";

interface IProps {
    pokemon: NamedAPIResource;
    imageUrl: string;
}

const ListItem: FC<IProps> = ({pokemon, imageUrl}) => {
    const {favorites} = useAppSelector(state => state.pokemonSlice);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        sessionStorage.setItem(SessionStorageItems.BACK_PATH_POKEMON, location.pathname + location.search);
        navigate(AppRoutes.POKEMON_DEATILS_NAV + pokemon.name);
    }

    const favoritesAction = () => {
        if (isFavorite(pokemon, favorites)) {
            return dispatch(pokemonSliceActions.removeFromFavorites(pokemon));
        } else {
            return dispatch(pokemonSliceActions.addToFavorites(pokemon));
        }
    }

    return (
        <Card sx={
            {
                border: '2px solid #000',
                height: '420px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        }>
            <CardMedia
                component="img"
                height="300"
                image={imageUrl}
                alt={pokemon.name}
                onClick={handleClick}
                className={css.listImg}
            />
            <CardContent>
                <Typography variant="h5">{pokemon.name}</Typography>
                <Button
                    variant="contained"
                    onClick={favoritesAction}
                >{isFavorite(pokemon, favorites) ? 'Remove from favorites' : 'Add to Favorites'}</Button>
            </CardContent>
        </Card>
    );
}

export default ListItem;