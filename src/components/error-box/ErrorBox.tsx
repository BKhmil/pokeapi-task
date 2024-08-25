import {FC} from 'react';
import { Alert, AlertProps } from '@mui/material';

interface ErrorBoxProps extends AlertProps {
    message: string;
}

const ErrorBox: FC<ErrorBoxProps> = ({ message, ...props }) => {
    return (
        <Alert severity="error" {...props}>
            {message}
        </Alert>
    );
};

export default ErrorBox;
