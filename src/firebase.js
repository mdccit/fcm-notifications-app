import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Replace these values with your own Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCncWhfaatDYbPzg8sZJQwaJ3Sr8zcofDQ",
    authDomain: "react-d14ac.firebaseapp.com",
    databaseURL: "https://react-d14ac.firebaseio.com",
    projectId: "react-d14ac",
    storageBucket: "react-d14ac.appspot.com",
    messagingSenderId: "544547888114",
    appId: "1:544547888114:web:970016ca765cc482d6e96b",
    measurementId: "G-PX63SEJXP8"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
