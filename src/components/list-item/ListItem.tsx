import {FC} from 'react';
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../enums/app-routes.enum';
import css from './ListItem.module.css';

interface IProps {
    name: string;
    imageUrl: string;
}

const ListItem: FC<IProps> = ({name, imageUrl}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(AppRoutes.POKEMON_DEATILS + name);
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
                alt={name}
                onClick={handleClick}
                className={css.listImg}
            />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Button variant="contained">Add to Favorites</Button>
            </CardContent>
        </Card>
    );
}

export default ListItem;