import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex-1 p-4 overflow-auto bg-gray-50 h-screen">
        {children}
      </main>
    </div>
  );
}

// // The DashboardLayout component is a higher-order component that wraps the main content of the application with a sidebar.

