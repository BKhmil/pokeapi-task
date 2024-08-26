import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <Box sx={{ py: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <div style={{marginTop: '10px'}}>
                            <Typography variant="h6" gutterBottom>
                                <img src={logo} alt="logo" width={20} /> PokeWiki
                            </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            © {new Date().getFullYear()} PokeWiki. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} container direction="column" alignItems="flex-end">
                        <Typography variant="h6" gutterBottom>
                            Source Code
                        </Typography>
                        <a href='https://github.com/BKhmil/pokeapi-task' target='_blank' rel='noopener noreferrer'>
                            <IconButton color="primary" aria-label="github">
                                <GitHub/>
                            </IconButton>
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </Box>
);
};

export default Footer;

