import {useAppSelector} from "../../hooks/rtk";
import {Box, Typography} from "@mui/material";
import Preloader from "../preloader/Preloader";
import ErrorBox from "../error-box/ErrorBox";
import BackButton from "../back-button/BackButton";
import {SessionStorageItems} from "../../enums/session-storage-items.enum";
import {useNavigate} from "react-router-dom";

const FormDetails = () => {
    const {isLoading, error, pokemonForm} = useAppSelector(state => state.pokemonFormSlice);

    const navigate = useNavigate();

    const fs = { fontSize: '1.2rem' };
    const ss = { width: '120px', borderRadius: '10px', border: '2px solid #1976d2' };

    return (
        <>
            {isLoading && <Preloader />}
            {error && <ErrorBox message={error} />}
            {pokemonForm && (
                <Box sx={{ padding: 4, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: '#1976d2' }}>
                        {pokemonForm.name}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, marginTop: 3 }}>
                        <Typography variant="body1" sx={fs}>
                            <strong>ID:</strong> {pokemonForm.id}
                        </Typography>
                        <Typography variant="body1" sx={fs}>
                            <strong>Order:</strong> {pokemonForm.form_order}
                        </Typography>
                        <Typography variant="body1" sx={fs}>
                            <strong>Default Form:</strong> {pokemonForm.is_default ? 'Yes' : 'No'}
                        </Typography>
                        <Typography variant="body1" sx={fs}>
                            <strong>Battle Only:</strong> {pokemonForm.is_battle_only ? 'Yes' : 'No'}
                        </Typography>
                        <Typography variant="body1" sx={fs}>
                            <strong>Mega Evolution:</strong> {pokemonForm.is_mega ? 'Yes' : 'No'}
                        </Typography>
                        <Typography variant="body1" sx={fs}>
                            <strong>Pokémon:</strong> {pokemonForm.pokemon.name}
                        </Typography>
                        <Typography variant="body1" sx={fs}>
                            <strong>Version Group:</strong> {pokemonForm.version_group.name}
                        </Typography>
                        <Typography variant="body1" sx={fs}>
                            <strong>Order:</strong> {pokemonForm.order}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, marginTop: 2 }}>
                            <img
                                src={pokemonForm.sprites.front_default || ''}
                                alt={`${pokemonForm.name} sprite`}
                                style={ss}
                            />
                            <img
                                src={pokemonForm.sprites.front_shiny || ''}
                                alt={`${pokemonForm.name} shiny sprite`}
                                style={ss}
                            />
                        </Box>
                    </Box>
                </Box>
            )}
            <BackButton
                action={() => {
                    const path = sessionStorage.getItem(SessionStorageItems.BACK_PATH_FORM);
                    path && navigate(path);
                }}
                styling={{position: 'fixed', top: '60vh', left: '4vw'}}
            />
        </>
    );
}

export default FormDetails;