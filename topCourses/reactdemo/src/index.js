import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ToastContainer/>
  <App />
  </>
);
