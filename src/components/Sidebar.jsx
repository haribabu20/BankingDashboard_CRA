import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

import {
  Home,
  Users,
  FileText,
  BarChart2,
  Shield,
  Settings,
  LogOut,
  Moon,
  Sun,
  Menu
} from 'lucide-react';
import { useState } from 'react';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { label: 'Customer Details', path: '/customers', icon: <Users size={20} /> },
    { label: 'Reports', path: '/reports', icon: <FileText size={20} /> },
    { label: 'Throttling', path: '/throttling', icon: <BarChart2 size={20} /> },
    { label: 'Exemption', path: '/exemption', icon: <Shield size={20} /> },
    { label: 'Configuration', path: '/configuration', icon: <Settings size={20} /> },
  ];

  // Extract a username from email for display (fallback to 'User')
  const displayName = user?.email?.split('@')[0] || 'User';

  return (
    <aside
      className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow h-full transition-all duration-300 flex flex-col justify-between ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl font-bold">
          {isOpen ? displayName : '🏦'}
        </span>
        <button onClick={toggleSidebar}>
          <Menu />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                isActive
                  ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                  : ''
              }`
            }
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-2 space-y-2">
        <button
          onClick={logout}
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
        >
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          {isOpen && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </aside>
  );
}

