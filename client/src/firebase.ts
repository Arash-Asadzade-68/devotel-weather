// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'devotelweather.firebaseapp.com',
    projectId: 'devotelweather',
    storageBucket: 'devotelweather.appspot.com',
    messagingSenderId: '967678759667',
    appId: '1:967678759667:web:7c2b464a12ffe80557dd86',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
