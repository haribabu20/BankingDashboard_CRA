import React from 'react';
import SidebarLayout from '../../layouts/SidebarLayout';

export default function DashboardPage() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-medium">Total Balance</h2>
          <p className="text-2xl mt-2">$25,000.00</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-medium">Income</h2>
          <p className="text-2xl mt-2 text-green-500">+$5,000</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-medium">Expenses</h2>
          <p className="text-2xl mt-2 text-red-500">–$2,300</p>
        </div>
      </div>
    </SidebarLayout>
  );
}
