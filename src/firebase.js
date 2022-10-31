import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSQhvi4X481jMCGzUE22gLFYgC6XiDKKM",
    authDomain: "twitter-clone-29095.firebaseapp.com",
    projectId: "twitter-clone-29095",
    storageBucket: "twitter-clone-29095.appspot.com",
    messagingSenderId: "720975800933",
    appId: "1:720975800933:web:868869eb9d92c11f44348c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;