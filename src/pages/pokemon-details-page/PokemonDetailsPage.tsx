import Container from '@mui/material/Container';
import { HEADER_HEIGHT } from '../../constants/styles';

const PokemonDetailsPage = () => {
    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px` }}>
            pokemon's details
        </Container>
    );
}

export default PokemonDetailsPage;