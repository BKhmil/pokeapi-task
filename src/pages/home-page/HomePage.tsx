import Container from "@mui/material/Container/Container";
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import {useTitle} from "../../hooks/useTitle";
import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../enums/app-routes.enum";

const HomePage = () => {
    useTitle('PokeWiki | Home');

    const navigate = useNavigate();

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h2" gutterBottom>
                        Welcome to PokeWiki
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Discover everything about your favorite Pokémon, from abilities and stats to types.<br/>Dive into the world of Pokémon and explore detailed information and exciting features.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => navigate(AppRoutes.POKEMONS_NAV)}
                    >
                        Explore now
                    </Button>
                </Container>
            </Box>
        </Container>
    );
}

export default HomePage;