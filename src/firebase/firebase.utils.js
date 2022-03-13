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

  export const createUserprofileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      }catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;