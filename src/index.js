import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
require('dotenv').config();

/*import { products } from './components/ItemListContainer/Items.jsx';
import { collection, addDoc, getFirestore } from 'firebase/firestore';*/

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tiendaalimafirebase.firebaseapp.com",
  projectId: "tiendaalimafirebase",
  storageBucket: "tiendaalimafirebase.appspot.com",
  messagingSenderId: "1090198632879",
  appId: "1:1090198632879:web:b7dab8e6fd6d906444d75a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

/*const db = getFirestore();
const ref = collection(db, 'products');

products.map((product) => addDoc(ref, product));*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
