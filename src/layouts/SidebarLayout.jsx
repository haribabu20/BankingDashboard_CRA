import React from 'react';

export default function SidebarLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6">
        <h2 className="text-2xl font-bold mb-4">BankDash</h2>
        <nav className="space-y-4">
          <a href="/" className="block hover:text-accent">Dashboard</a>
          <a href="/accounts" className="block hover:text-accent">Accounts</a>
          <a href="/transactions" className="block hover:text-accent">Transactions</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        {children}
      </main>
    </div>
  );
}
