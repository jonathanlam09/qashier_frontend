import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import * as helper from "./helper";

const root = ReactDOM.createRoot(document.getElementById('root'));
const apiHeader = { 
  'Content-Type': 'application/json',
};

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers = apiHeader;

global.config = {
  properties: {
      baseURL: window.location.origin + "/",
  },
  methods: helper
}

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
