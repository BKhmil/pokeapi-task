import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from '@mui/material';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/rtk';
import {FC, useEffect} from 'react';
import {pokemonExtraReducers} from '../../rtk/extra-reducers/pokemon.extra.reducers';
import Preloader from '../preloader/Preloader';
import ErrorBox from '../error-box/ErrorBox';
import BackButton from '../back-button/BackButton';
import {SessionStorageItems} from '../../enums/session-storage-items.enum';
import {AppRoutes} from "../../enums/app-routes.enum";
import notFound from '../../assets/image_not_found.png';
import css from './PokemonDetails.module.css';

interface IProps {
    isSearching: boolean;
}

const PokemonDetails: FC<IProps> = ({isSearching}) => {
    const {isLoading, singlePokemon, error} =
        useAppSelector(state => state.pokemonSlice);
    const dispatch = useAppDispatch();

    const location = useLocation();
    const navigate = useNavigate();

    const {pokemonName} = useParams();

    useEffect(() => {
        pokemonName && dispatch(pokemonExtraReducers.loadSinglePokemonByName(pokemonName));
    }, [pokemonName]);

    return (
        <>
            {isLoading && <Preloader />}
            {!isSearching && error && <ErrorBox message={error} />}
            {isSearching && error && <ErrorBox message={`No pokemons with name ${pokemonName}`} />}
            {singlePokemon &&
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h2"
                                            sx={{textAlign: 'center'}}>{singlePokemon.name}</Typography>
                            </CardContent>
                            <div className={css.flex}>
                                <div className={css.flexColumn}>
                                    <CardMedia
                                        className={css.imageFront + ' ' + css.img}
                                        component="img"
                                        image={singlePokemon.sprites.front_default || notFound}
                                        alt={`Image of ${singlePokemon.name}`}
                                    />
                                    <CardMedia
                                        className={css.imageFront + ' ' + css.img}
                                        component="img"
                                        image={singlePokemon.sprites.back_default || notFound}
                                        alt={`Image of ${singlePokemon.name}`}
                                    />
                                    <CardMedia
                                        className={css.imageFront + ' ' + css.img}
                                        component="img"
                                        image={singlePokemon.sprites.front_shiny || notFound}
                                        alt={`Image of ${singlePokemon.name}`}
                                    />
                                </div>
                                <CardMedia
                                    className={css.imageMain + ' ' + css.img}
                                    component="img"
                                    image={singlePokemon.sprites.other?.dream_world.front_default || notFound}
                                    alt={`Image of ${singlePokemon.name}`}
                                />
                                <div className={css.flexColumn}>
                                    <CardMedia
                                        className={css.imageFront}
                                        component="img"
                                        image={singlePokemon.sprites.other?.home.front_default || notFound}
                                        alt={`Image of ${singlePokemon.name}`}
                                    />
                                    <CardMedia
                                        className={css.imageFront}
                                        component="img"
                                        image={singlePokemon.sprites.other?.home.front_shiny || notFound}
                                        alt={`Image of ${singlePokemon.name}`}
                                    />
                                    <CardMedia
                                        className={css.imageFront}
                                        component="img"
                                        image={singlePokemon.sprites.back_shiny || notFound}
                                        alt={`Image of ${singlePokemon.name}`}
                                    />
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper style={{padding: '16px'}}>
                            <Typography variant="h6" gutterBottom>
                                Abilities
                            </Typography>
                            <List>
                                {singlePokemon.abilities.map((ability, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={ability.ability.name}/>
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="h6" gutterBottom style={{marginTop: '16px'}}>
                                Stats
                            </Typography>
                            <List>
                                {singlePokemon.stats.map((stat, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={`${stat.stat.name}: ${stat.base_stat}`}/>
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="h6" gutterBottom style={{marginTop: '16px'}}>
                                Types
                            </Typography>
                            <List>
                                {singlePokemon.types.map((type, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={type.type.name}/>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6">Forms:</Typography>
                        {
                            singlePokemon.forms.length ? singlePokemon.forms.map(form => (
                                <Button
                                    key={form.name}
                                    component={Link}
                                    to={AppRoutes.DYNAMIC_FORM_NAME_NAV + form.name}
                                    variant="contained"
                                    color="primary"
                                    sx={{ margin: 1 }}
                                    onClick={() => sessionStorage.setItem(SessionStorageItems.BACK_PATH_FORM, location.pathname + location.search)}
                                >
                                    {form.name}
                                </Button>
                            ))
                                : <Typography variant="body1">
                                    Pokemon does not have any forms
                                </Typography>
                        }
                    </Grid>
                </Grid>
            }
            {
                !isSearching && singlePokemon && <BackButton
                    action={() => {
                        const path = sessionStorage.getItem(SessionStorageItems.BACK_PATH_POKEMON);
                        path && navigate(path);
                    }}
                    styling={{position: 'fixed', top: '60vh', left: '4vw'}}
                />
            }
        </>
    );
}

export default PokemonDetails;