import {NamedAPIResource} from 'pokenode-ts';
import {FC, useEffect, useState} from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { apiMainClient } from '../../api/api.clients';

interface IProps {
    pokemon: NamedAPIResource;
}

const ListItem: FC<IProps> = ({pokemon}) => {
    const [image, setImage] = useState<string | null>();

    useEffect(() => {
        apiMainClient.pokemon.getPokemonByName(pokemon.name).then(res => setImage(res.sprites.front_default));
    }, []);

    return (
        <Card>
            <CardMedia
                component="img"
                height="300"
                image={image ? image : ''}
                alt={pokemon.name}
            />
            <CardContent>
                <Typography variant="h5">{pokemon.name}</Typography>
                <Button variant="contained">Add to Favorites</Button>
            </CardContent>
        </Card>
    );
}

export default ListItem;