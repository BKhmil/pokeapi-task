import PokemonDetails from "../../components/pokemon-details/PokemonDetails";
import {HEADER_HEIGHT} from "../../constants/styles";
import Container from "@mui/material/Container";

const SearchByNamePage = () => {
    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px` }}>
            <PokemonDetails isSearching={true}/>
        </Container>
    );
}

export default SearchByNamePage;