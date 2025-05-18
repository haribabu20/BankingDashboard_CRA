import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import AccountsPage from '../features/accounts/AccountsPage';
import ProtectedRoute from '../components/ProtectedRoute';
import TransactionsPage from '../features/transactions/TransactionsPage';
import DashboardLayout from '../layouts/DashboardLayout';



export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
// The AppRoutes component defines the routing structure of the application.  