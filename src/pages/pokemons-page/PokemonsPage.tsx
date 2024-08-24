import {useTitle} from "../../hooks/useTitle";
import {useEffect} from 'react';
import {HEADER_HEIGHT} from "../../constants/styles";
import PokemonsList from "../../components/pokemons-list/PokemonsList";
import Container from '@mui/material/Container';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PokemonsPage = () => {
    useTitle('PokeWiki | Pokemons');

    const notify = () => {
        toast.info('To navigate to a specific Pokémon page, click on its image');
    };

    useEffect(() => {
        notify();
    }, []);

    return (
        <Container sx={{ marginTop: `${HEADER_HEIGHT}px` }}>
            <PokemonsList />
            <ToastContainer />
        </Container>
    );
}

export default PokemonsPage;