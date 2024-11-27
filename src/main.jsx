import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './DataContext';
import App from './App';
import TaskDetails from './TaskDetails';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
        </Routes>
      </Router>
    </TaskProvider>
  </StrictMode>
);
