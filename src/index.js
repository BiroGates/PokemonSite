import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Components
import Home from './pages/home'
import Path from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Path />
  </React.StrictMode>
);
