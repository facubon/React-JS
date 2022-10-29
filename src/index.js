import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmya8FiL2JHObw_3YmyH19ppJ-W3kyRUw",
  authDomain: "reactjscoderhouse-c6258.firebaseapp.com",
  projectId: "reactjscoderhouse-c6258",
  storageBucket: "reactjscoderhouse-c6258.appspot.com",
  messagingSenderId: "519713667394",
  appId: "1:519713667394:web:f103d4ccd5da7d201e70db"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
