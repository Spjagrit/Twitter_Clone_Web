// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCmg1kz3bboFMLOO8AqUXZjMAYIUodeKhE",
    authDomain: "twitter-clone-fea24.firebaseapp.com",
    projectId: "twitter-clone-fea24",
    storageBucket: "twitter-clone-fea24.appspot.com",
    messagingSenderId: "1098388865929",
    appId: "1:1098388865929:web:645ef8baaf72a4404a1758",
    measurementId: "G-GKJPYZ9TB5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;