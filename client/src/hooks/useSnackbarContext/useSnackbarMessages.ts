import { useContext } from 'react';
import { SnackbarContext } from '.';

/** Hook for using the snackbar message */
export function useSnackbarMessages() {
    const context = useContext(SnackbarContext);

    if (context) {
        return context;
    }

    throw new Error('Error obtaining snackbar messages context.');
}
