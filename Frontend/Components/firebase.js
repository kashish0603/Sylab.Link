import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// import firebase from 'firebase';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB7aB128HYx4cbJPpCmvoer6jAPCn_SlZ4",
  authDomain: "login-form-aeaaf.firebaseapp.com",
  projectId: "login-form-aeaaf",
  storageBucket: "login-form-aeaaf.appspot.com",
  messagingSenderId: "941298984315",
  appId: "1:941298984315:web:8af0b591c16715b5aa09de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// export {firebase};