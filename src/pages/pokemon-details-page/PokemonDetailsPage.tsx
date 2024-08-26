import Container from '@mui/material/Container';
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from '../../constants/styles';
import PokemonDetails from '../../components/pokemon-details/PokemonDetails';
import {useTitle} from "../../hooks/useTitle";

const PokemonDetailsPage = () => {
    useTitle('PokeWiki | Pokemon Details');

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <PokemonDetails isSearching={false}/>
        </Container>
    );
}

export default PokemonDetailsPage;