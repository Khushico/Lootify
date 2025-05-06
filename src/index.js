import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App'; // Importing the main App component

// Creating the root element and rendering the App component inside it
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within React.StrictMode for better error handling and warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
