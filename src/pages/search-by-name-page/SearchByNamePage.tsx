import PokemonDetails from "../../components/pokemon-details/PokemonDetails";
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import Container from "@mui/material/Container";
import {useTitle} from "../../hooks/useTitle";

const SearchByNamePage = () => {
    useTitle('PokeWiki | Search - by name');

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            <PokemonDetails isSearching={true}/>
        </Container>
    );
}

export default SearchByNamePage;