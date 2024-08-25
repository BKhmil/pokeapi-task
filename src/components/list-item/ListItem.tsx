import {FC} from 'react';
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import {AppRoutes} from '../../enums/app-routes.enum';
import css from './ListItem.module.css';
import { SessionStorageItems } from '../../enums/session-storage-items.enum';

interface IProps {
    name: string;
    imageUrl: string;
}

const ListItem: FC<IProps> = ({name, imageUrl}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        sessionStorage.setItem(SessionStorageItems.BACK_PATH, location.pathname + location.search);
        navigate(AppRoutes.POKEMON_DEATILS_NAV + name);
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