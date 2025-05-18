import React, { useState } from 'react';

export default function Customers() {
  const [cifId, setCifId] = useState('');
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const data = JSON.parse(localStorage.getItem('customers')) || [];
    const found = data.find((entry) => entry.cifId === cifId.trim());
    if (found) {
      setCustomer(found);
      setError('');
    } else {
      setCustomer(null);
      setError('No customer found with that CIF ID');
    }
  };

  const renderDetails = () => {
    if (!customer) return null;

    const entries = Object.entries(customer);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow border border-gray-200"
          >
            <div className="text-sm text-gray-500 uppercase font-medium">{key}</div>
            <div className="text-lg font-semibold text-gray-900">{value}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Customer Details</h2>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          value={cifId}
          onChange={(e) => setCifId(e.target.value)}
          placeholder="Enter CIF ID"
          className="p-2 border rounded w-64 bg-white text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {error && <div className="text-red-600 font-medium">{error}</div>}

      {renderDetails()}
    </div>
  );
}
