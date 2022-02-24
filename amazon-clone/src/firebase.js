import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqPAlR5mPCf_HtmWkvKUMD9uEUIIvgEAM",
  authDomain: "clone-73c61.firebaseapp.com",
  projectId: "clone-73c61",
  storageBucket: "clone-73c61.appspot.com",
  messagingSenderId: "140976514316",
  appId: "1:140976514316:web:921a46eccabf6cf6f45529",
  measurementId: "G-7WM7FN3NEK"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };