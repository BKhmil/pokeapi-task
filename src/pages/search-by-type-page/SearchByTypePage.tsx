import Container from "@mui/material/Container/Container";
import {HEADER_HEIGHT} from "../../constants/styles";
import {useAppDispatch} from "../../hooks/rtk";
import {useEffect} from "react";
import {pokemonExtraReducers} from "../../rtk/extra-reducers/pokemon.extra.reducers";
import {useParams} from "react-router-dom";
import PokemonsList from "../../components/pokemons-list/PokemonsList";

const SearchByTypePage = () => {
    const dispatch = useAppDispatch();

    const {type} = useParams();

    useEffect(() => {
        type && dispatch(pokemonExtraReducers.loadPokemonsByType(type));
    }, [type]);

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px` }}>
            <PokemonsList currentPage={1} isSearching={true} changePage={() => {}} />
        </Container>
    );
}

export default SearchByTypePage;