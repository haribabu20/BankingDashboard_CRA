import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DashboardPage from '../features/dashboard/DashboardPage';
import AccountsPage from '../features/accounts/AccountsPage';
import ProtectedRoute from '../components/ProtectedRoute';
import TransactionsPage from '../features/transactions/TransactionsPage';
import DashboardLayout from '../layouts/DashboardLayout';

import Configuration from '../pages/Configuration';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Exemption from '../pages/Exemption';
import NotFound from '../pages/NotFound';
import Reports from '../pages/Reports';
import Throttling from '../pages/Throttling';



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

              {/* New Sidebar Pages */}
            <Route path="/customers" element={<div>Customer Details Page</div>} />
            <Route path="/reports" element={<div>Reports Page</div>} />
            <Route path="/throttling" element={<div>Throttling Page</div>} />
            <Route path="/exemption" element={<div>Exemption Page</div>} />
            <Route path="/configuration" element={<div>Configuration Page</div>} />


          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
// The AppRoutes component defines the routing structure of the application.  