import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBduEov7IuzYky62QqzMSc7sxi316oFAHk",
    authDomain: "challenge-5d84b.firebaseapp.com",
    projectId: "challenge-5d84b",
    storageBucket: "challenge-5d84b.appspot.com",
    messagingSenderId: "65112090751",
    appId: "1:65112090751:web:a91f5601f40d8b183cf74a",
    measurementId: "G-7N7ZG8SNCQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };