import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app'
import 'firebase/compat/auth';
import { getAuth  } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC60HaXJ-_MWvI1BC7Jn9G4__r7q5E6NoA",
    authDomain: "quicklingooo.firebaseapp.com",
    projectId: "quicklingooo",
    storageBucket: "quicklingooo.appspot.com",
    messagingSenderId: "701503889910",
    appId: "1:701503889910:web:2136e4ebba711195fba7d7",
    measurementId: "G-QVZHX5P2H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFireStore(app);

const auth = getAuth(app);

const analytics = getAnalytics(app);

export {  auth };