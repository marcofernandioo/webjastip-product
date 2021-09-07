import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"></link>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);