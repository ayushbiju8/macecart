
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQdQdyB3-sX6tyYBw6xFBVz_47vZpUR-I",
  authDomain: "macecart-dfd73.firebaseapp.com",
  projectId: "macecart-dfd73",
  storageBucket: "macecart-dfd73.appspot.com",
  messagingSenderId: "333963058671",
  appId: "1:333963058671:web:e2a3cd2418a9a0c60aaa1a",
  measurementId: "G-MD8YZJSG0T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();