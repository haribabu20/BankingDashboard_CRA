import { NavLink } from 'react-router-dom';
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
  const menuItems = [
    { label: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { label: 'Customer Details', path: '/customers', icon: <Users size={20} /> },
    { label: 'Reports', path: '/reports', icon: <FileText size={20} /> },
    { label: 'Throttling', path: '/throttling', icon: <BarChart2 size={20} /> },
    { label: 'Exemption', path: '/exemption', icon: <Shield size={20} /> },
    { label: 'Configuration', path: '/configuration', icon: <Settings size={20} /> }
  ];

  return (
    <aside
      className={`bg-white shadow h-full transition-all duration-300 flex flex-col justify-between ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl font-bold">{isOpen ? 'BankDash' : '🏦'}</span>
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
              `flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition ${
                isActive ? 'bg-gray-200 font-semibold' : ''
              }`
            }
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t p-2 space-y-2">
        <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full">
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </button>
        <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 w-full">
          <Moon size={20} />
          {isOpen && <span>Toggle Theme</span>}
        </button>
      </div>
    </aside>
  );
}
