//React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';

// Elements
import App from './App';
import ErrorPage from './routes/ErrorPage';

// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './styles.css';

import DataContextProvider from './contexts/DataContext';
import SidebarContextProvider from './contexts/SidebarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <SidebarContextProvider>
        <AnimatePresence mode="wait">
          <Router>
            <Routes>
              <Route path="/error/*" element={<ErrorPage />} />
              <Route path="*" element={<App />} />
            </Routes>
          </Router>
        </AnimatePresence>
      </SidebarContextProvider>
    </DataContextProvider>
  </React.StrictMode>,
);
