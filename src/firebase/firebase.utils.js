import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbdyrjMw5rWM6hiGMYQMIxUWz8ETKlAFs",
    authDomain: "crwn-clothing-b9a4b.firebaseapp.com",
    databaseURL: "https://crwn-clothing-b9a4b.firebaseio.com",
    projectId: "crwn-clothing-b9a4b",
    storageBucket: "crwn-clothing-b9a4b.appspot.com",
    messagingSenderId: "765002728291",
    appId: "1:765002728291:web:ac9207d46122d808010956",
    measurementId: "G-G7SHQLHV7H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;