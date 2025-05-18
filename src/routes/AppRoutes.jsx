import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from '../features/dashboard/DashboardPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
