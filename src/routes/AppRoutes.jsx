import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from '../features/dashboard/DashboardPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* Future routes can be added here */}
      </Routes>
    </Router>
  );
}
