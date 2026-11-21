import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBFnigf8gOuYsKH62Jwb5rcOLod66ZQ-1A",
    authDomain: "fiap-fase-4.firebaseapp.com",
    projectId: "fiap-fase-4",
    storageBucket: "fiap-fase-4.firebasestorage.app",
    messagingSenderId: "807053019696",
    appId: "1:807053019696:web:1e9c021c290b99a3b6fbf5"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

