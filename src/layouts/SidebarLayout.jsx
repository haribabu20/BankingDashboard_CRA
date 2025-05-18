import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function SidebarLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
