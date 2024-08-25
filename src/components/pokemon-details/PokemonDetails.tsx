import {Button, Card, CardContent, CardMedia, Grid, Typography, List, ListItem, ListItemText, Paper} from '@mui/material';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/rtk';
import {useEffect} from 'react';
import {pokemonExtraReducers} from '../../rtk/extra-reducers/pokemon.extra.reducers';
import Preloader from '../preloader/Preloader';
import ErrorBox from '../error-box/ErrorBox';
import css from './PokemonDetails.module.css';
import BackButton from '../back-button/BackButton';
import { SessionStorageItems } from '../../enums/session-storage-items.enum';

const PokemonDetails = () => {
    const {isLoading, singlePokemon, error} = useAppSelector(state => state.pokemonSlice);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { pokemonName } = useParams();

    useEffect(() => {
        pokemonName && dispatch(pokemonExtraReducers.loadSinglePokemonByName(pokemonName));
    }, []);

    return (
        <>
            <BackButton
                action={() => {
                    const path = sessionStorage.getItem(SessionStorageItems.BACK_PATH);

                    path && navigate(path);
                }}
                styling={{position: 'absolute', top: '12vh', left: '4vw'}}
            />
            {
                isLoading ? <Preloader /> :
                    error ? <ErrorBox message={error.message} /> :
                        singlePokemon ?
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h2" sx={{textAlign: 'center'}}>{singlePokemon.name}</Typography>
                                        </CardContent>
                                        <div className={css.flex}>
                                            <div className={css.flexColumn}>
                                                <CardMedia
                                                    className={css.imageFront}
                                                    component="img"
                                                    image={singlePokemon.sprites.front_default || ''}
                                                    alt={`Image of ${singlePokemon.name}`}
                                                />
                                                <CardMedia
                                                    className={css.imageFront}
                                                    component="img"
                                                    image={singlePokemon.sprites.back_default || ''}
                                                    alt={`Image of ${singlePokemon.name}`}
                                                />
                                                <CardMedia
                                                    className={css.imageFront}
                                                    component="img"
                                                    image={singlePokemon.sprites.front_shiny || ''}
                                                    alt={`Image of ${singlePokemon.name}`}
                                                />
                                            </div>
                                            <CardMedia
                                                className={css.imageMain}
                                                component="img"
                                                image={singlePokemon.sprites.other?.dream_world.front_default || ''}
                                                alt={`Image of ${singlePokemon.name}`}
                                            />
                                            <div className={css.flexColumn}>
                                                <CardMedia
                                                    className={css.imageFront}
                                                    component="img"
                                                    image={singlePokemon.sprites.other?.home.front_default || ''}
                                                    alt={`Image of ${singlePokemon.name}`}
                                                />
                                                <CardMedia
                                                    className={css.imageFront}
                                                    component="img"
                                                    image={singlePokemon.sprites.other?.home.front_shiny || ''}
                                                    alt={`Image of ${singlePokemon.name}`}
                                                />
                                                <CardMedia
                                                    className={css.imageFront}
                                                    component="img"
                                                    image={singlePokemon.sprites.back_shiny || ''}
                                                    alt={`Image of ${singlePokemon.name}`}
                                                />
                                            </div>
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Paper style={{ padding: '16px' }}>
                                        <Typography variant="h6" gutterBottom>
                                            Abilities
                                        </Typography>
                                        <List>
                                            {singlePokemon.abilities.map((ability, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={ability.ability.name} />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
                                            Stats
                                        </Typography>
                                        <List>
                                            {singlePokemon.stats.map((stat, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={`${stat.stat.name}: ${stat.base_stat}`} />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
                                            Types
                                        </Typography>
                                        <List>
                                            {singlePokemon.types.map((type, index) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={type.type.name} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6">Forms:</Typography>
                                    {singlePokemon.forms.map(form => (
                                        <Button
                                            key={form.name}
                                            component={Link}
                                            to={`/forms/${form.name}`}
                                            variant="contained"
                                            color="primary"
                                            sx={{ margin: 1 }}
                                        >
                                            {form.name}
                                        </Button>
                                    ))}
                                </Grid>
                            </Grid> : <div>Oops...</div>
            }
        </>
    );
}

export default PokemonDetails;