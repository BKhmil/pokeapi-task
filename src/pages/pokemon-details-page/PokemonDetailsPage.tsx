import Container from '@mui/material/Container';
import { HEADER_HEIGHT } from '../../constants/styles';
import PokemonDetails from '../../components/pokemon-details/PokemonDetails';

const PokemonDetailsPage = () => {
    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px` }}>
            <PokemonDetails />
        </Container>
    );
}

export default PokemonDetailsPage;