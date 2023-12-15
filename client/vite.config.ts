import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    /** we are going to add this config to connect to our server apis, each time that we are requesting
     * for a url with api vite will adde the target to start of that*/
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
            },
        },
    },
    plugins: [react()],
});
