import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { persistor, store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { SnackbarProvider } from './hooks/useSnackbarContext/SnackbarContext.tsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SnackbarProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </SnackbarProvider>
    </React.StrictMode>,
);
