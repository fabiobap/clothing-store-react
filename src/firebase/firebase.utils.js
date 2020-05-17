import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnVOiLWF5DD7bvBduiCBFU4SH_-z7T7QQ",
    authDomain: "clothing-store-react-cd05e.firebaseapp.com",
    databaseURL: "https://clothing-store-react-cd05e.firebaseio.com",
    projectId: "clothing-store-react-cd05e",
    storageBucket: "clothing-store-react-cd05e.appspot.com",
    messagingSenderId: "880996916371",
    appId: "1:880996916371:web:c43580b5d3d58fca544166",
    measurementId: "G-MVQ5LHY8SR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;