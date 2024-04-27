import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import SubmitForm from './components/submitForm.js';
import Home from './pages/home.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Wrap the Route components with Routes */}
        <Route path="/" element={<Home />} /> {/* Use the "element" prop instead of "component" */}
        <Route path="/create" element={<SubmitForm />} /> {/* Use the "element" prop instead of "component" */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
