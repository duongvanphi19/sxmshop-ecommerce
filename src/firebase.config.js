import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3p7OAyrNCBPnQX0iF8wIf0wLXRgj-XSQ",
  authDomain: "sxmshop-5faa7.firebaseapp.com",
  databaseURL: "https://sxmshop-5faa7-default-rtdb.firebaseio.com",
  projectId: "sxmshop-5faa7",
  storageBucket: "sxmshop-5faa7.appspot.com",
  messagingSenderId: "479701019911",
  appId: "1:479701019911:web:0ce0c024c2f1ddb91129a2",
  measurementId: "G-617B49LYTL"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
