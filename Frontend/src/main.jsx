import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MyContextProvider } from './MyContext.jsx'; // 1. Import your provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap your App with the Provider */}
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
);