import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { HEADER_HEIGHT } from '../../constants/styles';

const Preloader = () => {
    return (
        <Box sx={{ width: '100%', marginY: HEADER_HEIGHT }}>
            <LinearProgress />
        </Box>
    );
};

export default Preloader;