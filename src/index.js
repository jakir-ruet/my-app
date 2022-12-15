import React from 'react';
import ReactDOM from 'react-dom/client';
import './mics/index.css';
import App from './app/App';
import reportWebVitals from './mics/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
