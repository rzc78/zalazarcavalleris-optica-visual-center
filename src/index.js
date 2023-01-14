import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Inicalización y seting de Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyCuXQwYcmEAqrKRbu42wGLBQJpXtPbkBQk",
  authDomain: "proyectoopticavisual.firebaseapp.com",
  projectId: "proyectoopticavisual",
  storageBucket: "proyectoopticavisual.appspot.com",
  messagingSenderId: "60496147533",
  appId: "1:60496147533:web:e8c09cc8a55290052a5804",
  measurementId: "G-FL60EWBQMY"
}

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
