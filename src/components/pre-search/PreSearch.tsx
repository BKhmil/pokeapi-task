import {Box, Typography} from "@mui/material";
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import Container from "@mui/material/Container/Container";
import {useTitle} from "../../hooks/useTitle";

const PreSearch = () => {
    useTitle('PokeWiki | Search');

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <Box sx={{textAlign: 'center', marginTop: 4}}>
                <Typography variant="h3" gutterBottom>
                    Welcome to the PokeWiki search!
                </Typography>
                <Typography variant="h4">
                    Use the form above to search for your favorite Pokémon by name, type, or ability.
                </Typography>
                <Typography variant="h4">
                    Explore the vast world of Pokémon and discover detailed information about each one.
                </Typography>
            </Box>
        </Container>
    );
}

export default PreSearch;