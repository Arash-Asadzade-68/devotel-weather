import React, { createContext, useState } from 'react';
import SnackbarComponent from '../../components/SnackbarComponent/SnackbarComponent';

export type SnackbarMessageStatus = 'success' | 'info' | 'warning' | 'error' | undefined;

interface ISnackbarMessage {
    message: string;
    status: SnackbarMessageStatus;
    autoHideDuration?: number;
}

export interface ISnackbarContext {
    isSnackbarOpen: boolean;
    snackbarMessage: ISnackbarMessage | undefined;
    sendSnackbarMessage: (message: string, status: SnackbarMessageStatus, autoHideDuration?: number) => void;
    closeSnackbar: () => void;
}

/** Creates the snackbar context */
export const SnackbarContext = createContext<ISnackbarContext | undefined>(undefined);

/** Snackbar provider which handles messaging within the app */
export const SnackbarProvider = ({ children }: { children?: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState<ISnackbarMessage | undefined>();

    const onCloseSnackbar = () => {
        setIsOpen(false);
    };
    const onSendSnackbarMessage = async (
        snackbarMessage: string,
        status: SnackbarMessageStatus,
        autoHideDuration?: number,
    ) => {
        if (isOpen) {
            await setIsOpen(false);
        }
        await setMessage({ message: snackbarMessage, status, autoHideDuration });
        await setIsOpen(true);
    };

    return (
        <SnackbarContext.Provider
            value={{
                isSnackbarOpen: isOpen,
                snackbarMessage: message,
                sendSnackbarMessage: onSendSnackbarMessage,
                closeSnackbar: onCloseSnackbar,
            }}
        >
            <SnackbarComponent />
            {children}
        </SnackbarContext.Provider>
    );
};
