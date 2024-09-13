// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuhV0D1tcAPMDjUHLsyVgGWlG6l6WdCEY",
  authDomain: "vividlife-app.firebaseapp.com",
  projectId: "vividlife-app",
  storageBucket: "vividlife-app.appspot.com",
  messagingSenderId: "504126564541",
  appId: "1:504126564541:web:00d96d29a2a643af132fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const addProgress = async (userId, sober) => {
    try {
      const progressRef = collection(db, 'users', userId, 'progress');
      await addDoc(progressRef, {
        sober: sober,
        date: new Date(),
      });
    } catch (error) {
      console.error('Error adding progress:', error);
    }
  };