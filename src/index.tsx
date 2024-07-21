// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure your index.css is imported
import './App.scss'; // Import your SCSS file here
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import { GlobalStateProvider } from './context/GlobalState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <GlobalStateProvider>
    <RouterProvider router={Routes} />
  </GlobalStateProvider>
);

reportWebVitals();
