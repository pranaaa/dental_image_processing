// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardIndex from './features/dashboard';
import DentalIndex from './features/dentalOPG/index';
import './test.scss'; // Import the CSS file here

function App() {
  return (
    <>
    <div className="main-container">
    
      <Routes>
        <Route path="/" element={<DashboardIndex />} />
      
        <Route path="/report" element={<DentalIndex />} />
        {/* Add other routes here */}
      </Routes>
      </div>
    </>
  );
}

export default App;
