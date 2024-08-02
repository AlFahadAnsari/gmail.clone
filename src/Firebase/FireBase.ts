import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDX4jMnyr9jOdWYErsjChgQREkqT293RhA",
  authDomain: "clone-ebc1d.firebaseapp.com",
  projectId: "clone-ebc1d",
  storageBucket: "clone-ebc1d.appspot.com",
  messagingSenderId: "712301302088",
  appId: "1:712301302088:web:2cbb26f8f03795f01ee37d",
  measurementId: "G-GG63FWBXWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new  GoogleAuthProvider()