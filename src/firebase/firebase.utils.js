import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCkeaa-NKTZ6P3H6n5NPofXRSsHOX1CvHo",
    authDomain: "crwn-db-a14a5.firebaseapp.com",
    projectId: "crwn-db-a14a5",
    storageBucket: "crwn-db-a14a5.appspot.com",
    messagingSenderId: "334525627771",
    appId: "1:334525627771:web:921aaa8e02896a4cca51de",
    measurementId: "G-B6E0ST63XC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;