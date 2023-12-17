import { SnackbarMessageStatus } from '../hooks/useSnackbarContext';

export function errorHandler(
    error: unknown,
    sendSnackbarMessage: (
        message: string,
        status: SnackbarMessageStatus,
        autoHideDuration?: number | undefined,
    ) => void,
) {
    if (error instanceof Error) {
        const { message } = error;
        if (message.includes('Failed to fetch')) {
            sendSnackbarMessage('something went wrong, please check your connection, or use VPN :))', 'error');
        } else if (message.includes('auth/network-request-failed')) {
            sendSnackbarMessage(
                'something went wrong with Firebase, please check your connection, or use VPN :))',
                'error',
            );
        } else {
            sendSnackbarMessage(message, 'error');
        }
    }
}
