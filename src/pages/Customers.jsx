import React, { useEffect, useState } from 'react';
import {
  getAllCustomers,
  getCustomerByCifId,
  deleteCustomer
} from '../services/customerApi';

export default function Customers() {
  const [searchCifId, setSearchCifId] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const [allCustomers, setAllCustomers] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const res = await getAllCustomers();
      setAllCustomers(res.data);
    } catch (err) {
      console.error('Error loading customers:', err);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await getCustomerByCifId(searchCifId);
      if (res.data.length > 0) {
        setCustomerData(res.data[0]);
        setNotFound(false);
      } else {
        setCustomerData(null);
        setNotFound(true);
      }
    } catch (err) {
      console.error('Search failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCustomer(id);
      loadCustomers();
      if (customerData?.id === id) {
        setCustomerData(null);
      }
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
    const sorted = [...allCustomers].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setAllCustomers(sorted);
  };

  const paginatedData = allCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(allCustomers.length / itemsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Customer Details</h1>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter CIF ID"
          value={searchCifId}
          onChange={(e) => setSearchCifId(e.target.value)}
          className="border p-2 rounded w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {notFound && <p className="text-red-500 mb-4">No customer found.</p>}

      {customerData && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(customerData).map(([key, value]) => (
            <div key={key} className="bg-gray-200 p-4 rounded shadow text-sm">
              <strong className="block uppercase text-xs font-bold text-gray-600">{key}</strong>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-xl font-semibold mb-2">All Customers</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded overflow-hidden text-sm">
          <thead>
            <tr className="bg-gray-800 text-white">
              {['CIFId', 'Customer Name', 'Customer Email', 'Customer Phone', 'Account Number', 'Customer Status'].map((field) => (
                <th
                  key={field}
                  className="px-4 py-2 text-left cursor-pointer"
                  onClick={() => handleSort(field)}
                >
                  {field}
                  {sortField === field && (sortOrder === 'asc' ? ' 🔼' : ' 🔽')}
                </th>
              ))}
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((cust) => (
              <tr key={cust.id} className="bg-gray-900 text-white border-b border-gray-800">
                <td className="px-4 py-2">{cust['CIFId']}</td>
                <td className="px-4 py-2">{cust['Customer Name']}</td>
                <td className="px-4 py-2">{cust['Customer Email']}</td>
                <td className="px-4 py-2">{cust['Customer Phone']}</td>
                <td className="px-4 py-2">{cust['Account Number']}</td>
                <td className="px-4 py-2">{cust['Customer Status']}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(cust.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {allCustomers.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-400 py-4">
                  No customer data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-gray-600 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-gray-600 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
