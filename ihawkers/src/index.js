import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

/**
 * The root element where the React application is rendered.
 * @type {HTMLDivElement}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in a BrowserRouter.
root.render(
  <Router>
    <App />
  </Router>
);
