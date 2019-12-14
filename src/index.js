import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

var firebaseConfig = {
    apiKey: "AIzaSyDmzOqSRjC4cHDiUPXBN5CIWHWb9cbtgzI",
    authDomain: "school-264ad.firebaseapp.com",
    databaseURL: "https://school-264ad.firebaseio.com",
    projectId: "school-264ad",
    storageBucket: "school-264ad.appspot.com",
    messagingSenderId: "364225330749",
    appId: "1:364225330749:web:6a0e558cc698fe9a7d7454",
    measurementId: "G-6G09SZ7PBN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default firebaseConfig;
