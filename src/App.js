import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { messaging, getToken, onMessage } from "./firebase";

function App() {

  const [notification, setNotification] = useState({ title: "", body: "" });

  // Function to request permission and get the FCM token
  const requestPermission = async () => {
      try {
          const token = await getToken(messaging, { vapidKey: "BORGx7BCOgFioduQJeGF_CpEayEpgEpwfkzblh28k9IrScqrJmYiJzvJkf4d3vyL0Mmfq3Owz6WDilFvlDxdgw8" });
          if (token) {
              console.log("FCM Token:", token);
          } else {
              console.log("No registration token available.");
          }
      } catch (error) {
          console.error("Error retrieving token", error);
      }
  };

  useEffect(() => {
      requestPermission();

      // Handle incoming messages
      onMessage(messaging, (payload) => {
          console.log("Message received. ", payload);
          setNotification({
              title: payload.notification.title,
              body: payload.notification.body,
          });
      });
  }, []);


  return (
    <div>
        <h1>FCM Notification Test</h1>
        <h2>Notification Title: {notification.title}</h2>
        <h3>Notification Body: {notification.body}</h3>
    </div>
);
}

export default App;
