// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPLkWm3nP0XhWAsfLT4XNph5QAcZH6Ulg",
  authDomain: "krishilantix.firebaseapp.com",
  projectId: "krishilantix",
  storageBucket: "krishilantix.appspot.com",
  messagingSenderId: "1044413427364",
  appId: "1:1044413427364:web:8f0c9404405f6997914031",
  measurementId: "G-ECG05KXB1D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
