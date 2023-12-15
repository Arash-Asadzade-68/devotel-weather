import { Snackbar, Alert } from '@mui/material';
import { useSnackbarMessages } from '../../hooks/useSnackbarContext/useSnackbarMessages';

/** Snackbar message which uses the snackbar context api */
const SnackbarComponent = () => {
    const { isSnackbarOpen, closeSnackbar, snackbarMessage } = useSnackbarMessages();
    const onCloseSnackbar = () => {
        setTimeout(
            () => {
                closeSnackbar();
            },
            snackbarMessage?.autoHideDuration ?? 7000,
        );
    };

    return (
        <Snackbar
            open={isSnackbarOpen}
            onClose={onCloseSnackbar}
            data-component-name={`snackbar-${snackbarMessage?.status}`}
            autoHideDuration={snackbarMessage?.autoHideDuration ?? 7000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={closeSnackbar} severity={snackbarMessage?.status || undefined}>
                {snackbarMessage?.message || 'something went wrong'}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarComponent;
