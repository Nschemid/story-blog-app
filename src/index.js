import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app'
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var firebaseConfig = {
  apiKey: "AIzaSyBRZvETLOlo7mqBmQIXyAHXCLUS5wdPVPQ",
  authDomain: "blog-ideas-app.firebaseapp.com",
  projectId: "blog-ideas-app",
  storageBucket: "blog-ideas-app.appspot.com",
  messagingSenderId: "381808960550",
  appId: "1:381808960550:web:b64af13208865126fcb2e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
