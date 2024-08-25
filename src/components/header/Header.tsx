import {useAppDispatch, useAppSelector} from "../../hooks/rtk";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {themeActions} from "../../rtk/slices/theme.slice";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {AppRoutes} from "../../enums/app-routes.enum";
import {APP_CONTENT_PADDING} from "../../constants/styles";
import logo from '../../assets/logo.png';
import { Themes } from "../../enums/themes.enum";

const Header = () => {
    const {theme} = useAppSelector(state => state.themeSlice);
    const dispatch = useAppDispatch();

    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
        '&.active': {
            textDecoration: 'underline',
        },
    };

    return (
        <AppBar position="fixed" sx={{ padding: `0 ${APP_CONTENT_PADDING}vw` }}>
            <Toolbar sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box
                    display='flex'
                >
                    <img src={logo} alt="logo" width={40}/>
                    <Typography
                        variant="h4"
                        component="h3"
                    >PokeWiki</Typography>
                </Box>
                <Box component="nav" sx={{ display: 'flex', gap: '40px' }}>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to={AppRoutes.HOME}
                        sx={linkStyles}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to={AppRoutes.POKEMONS}
                        sx={linkStyles}
                    >
                        Pokemons
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => dispatch(themeActions.changeTheme())} color="inherit">
                        {theme === Themes.DARK ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;