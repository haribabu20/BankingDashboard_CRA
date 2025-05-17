// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from '../features/dashboard/DashboardPage';
import AccountsPage from '../features/accounts/AccountsPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        {/* Add more routes */}
      </Routes>
    </Router>
  );
}
