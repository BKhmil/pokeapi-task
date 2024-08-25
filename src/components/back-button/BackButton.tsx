import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {FC, CSSProperties} from 'react';

interface IProps {
    action: () => void;
    styling: CSSProperties;
}

const BackButton: FC<IProps> = ({action, styling}) => {
    return (
        <IconButton
            onClick={action}
            color="primary"
            aria-label="Previous Page"
            style={styling}
            type='button'
        >
            <ArrowBackIosIcon />
        </IconButton>
    );
}

export default BackButton;