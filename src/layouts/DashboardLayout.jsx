import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex-1 bg-gray-50 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}


// // The DashboardLayout component is a higher-order component that wraps the main content of the application with a sidebar.

