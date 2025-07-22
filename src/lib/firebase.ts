// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// IMPORTANT: Replace with your actual configuration from the Firebase Console
const firebaseConfig = {
  projectId: 'resume-insights-dashboard',
  appId: '1:527834275134:web:d36a2dc67305a5d85b206f',
  storageBucket: 'resume-insights-dashboard.firebasestorage.app',
  apiKey: 'AIzaSyCVFOnqOmwhhiYjdCOW335z2RwIUo-kyQU',
  authDomain: 'resume-insights-dashboard.firebaseapp.com',
  messagingSenderId: '527834275134',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {app, db};
