import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Menu } from 'lucide-react';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { user, logout } = useAuth();

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-16'
      } bg-primary text-white h-screen p-4 transition-all duration-300 flex flex-col`}
    >
      <button
        onClick={toggleSidebar}
        className="text-white mb-6 focus:outline-none"
      >
        <Menu />
      </button>

      <div className="mb-6">
        {isOpen && (
          <>
            <p className="text-sm text-gray-300">Logged in as:</p>
            <p className="font-semibold">{user?.email}</p>
          </>
        )}
      </div>

      <nav className="flex-1">
        <NavLink to="/" className="block py-2 hover:text-gray-300">
          Dashboard
        </NavLink>
        <NavLink to="/transactions" className="block py-2 hover:text-gray-300">
          Transactions
        </NavLink>
        <NavLink to="/accounts" className="block py-2 hover:text-gray-300">
          Accounts
        </NavLink>
      </nav>

      <button
        onClick={logout}
        className="mt-auto flex items-center gap-2 text-sm hover:text-gray-300"
      >
        <LogOut size={18} />
        {isOpen && 'Logout'}
      </button>
    </aside>
  );
}

// This Sidebar component is a navigation menu that appears on the left side of the application.  