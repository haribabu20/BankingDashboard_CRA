import React, { useState } from 'react';
import {
  Home,
  Users,
  FileText,
  Activity,
  ShieldOff,
  Settings,
  LogOut,
  Sun,
  Moon,
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const navItems = [
    { label: 'Dashboard', icon: <Home />, path: '/' },
    { label: 'Customer Details', icon: <Users />, path: '/customers' },
    { label: 'Reports', icon: <FileText />, path: '/reports' },
    { label: 'Throttling', icon: <Activity />, path: '/throttling' },
    { label: 'Exemption', icon: <ShieldOff />, path: '/exemption' },
    { label: 'Configuration', icon: <Settings />, path: '/configuration' },
  ];

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-screen p-4 shadow-lg transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Top section */}
      <div>
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xl font-bold">{isOpen ? 'BankDash' : 'BD'}</div>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 dark:text-gray-300"
          >
            {isOpen ? '<' : '>'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="flex items-center gap-3 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="space-y-4">
        <button className="flex items-center gap-3 text-sm font-medium hover:text-red-600">
          <LogOut />
          {isOpen && <span>Logout</span>}
        </button>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 text-sm font-medium hover:text-yellow-500"
        >
          {darkMode ? <Sun /> : <Moon />}
          {isOpen && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </div>
  );
}
