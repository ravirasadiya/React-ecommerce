import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCF7QfCtiqQUu0xyDTZyW0xoZnmoGP53J4',
  authDomain: 'crown-ecommerce-ea749.firebaseapp.com',
  databaseURL: 'https://crown-ecommerce-ea749.firebaseio.com',
  projectId: 'crown-ecommerce-ea749',
  storageBucket: 'crown-ecommerce-ea749.appspot.com',
  messagingSenderId: '305284859302',
  appId: '1:305284859302:web:dad44ae8dd97da7f68fb67',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
