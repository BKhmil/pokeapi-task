import Container from "@mui/material/Container/Container";
import {HEADER_HEIGHT, PAGE_MIN_HEIGHT} from "../../constants/styles";
import Guide from "../../components/guide/Guide";
import {useAppSelector} from "../../hooks/rtk";
import PokemonsList from "../../components/pokemons-list/PokemonsList";
import {Typography} from "@mui/material";
import {useTitle} from "../../hooks/useTitle";

const FavoritesPage = () => {
    useTitle('PokeWiki | Favorites');

    const {favorites} = useAppSelector(state => state.pokemonSlice);

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px`, minHeight: `${PAGE_MIN_HEIGHT}vh`}}>
            {
                favorites.length ? <>
                        <PokemonsList
                            currentPage={1}
                            withPagination={false}
                            isLoading={false}
                            error={null}
                            pokemonsPage={null}
                            pokemonsList={favorites}
                        />
                        <Guide />
                    </>
                    : <Typography variant="h2">
                        No favorite pokemons yet
                    </Typography>
            }
        </Container>
    );
}

export default FavoritesPage;