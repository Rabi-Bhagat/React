import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import A from './A'; // ✅ A includes the Provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A />
  </React.StrictMode>
);
