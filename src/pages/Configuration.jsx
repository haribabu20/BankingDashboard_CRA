import React from 'react';
import { useForm } from 'react-hook-form';

export default function Configuration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    // Save to localStorage as mock storage
    const existing = JSON.parse(localStorage.getItem('customers') || '[]');
    localStorage.setItem('customers', JSON.stringify([...existing, data]));
    alert('Customer data saved locally!');
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Add Customer Configuration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          ['cifId', 'CIF ID'],
          ['caseId', 'Case ID'],
          ['obligationType', 'Obligation Type'],
          ['customerType', 'Customer Type'],
          ['customerName', 'Customer Name'],
          ['customerAddress', 'Customer Address'],
          ['customerPhone', 'Customer Phone Number'],
          ['customerEmail', 'Customer Email'],
          ['customerStatus', 'Customer Status'],
          ['accountNumber', 'Account Number'],
          ['accountStatus', 'Account Status'],
          ['caseStatus', 'Case Status'],
          ['caseSubStatus', 'Case Sub Status']
        ].map(([key, label]) => (
          <div key={key} className="flex flex-col">
            <label className="font-medium mb-1" htmlFor={key}>{label}</label>
            <input
              id={key}
              {...register(key, { required: `${label} is required` })}
              className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700"
            />
            {errors[key] && (
              <span className="text-red-500 text-sm">{errors[key]?.message}</span>
            )}
          </div>
        ))}

        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded hover:bg-primary-dark"
          >
            Save Customer
          </button>
        </div>
      </form>
    </div>
  );
} 
