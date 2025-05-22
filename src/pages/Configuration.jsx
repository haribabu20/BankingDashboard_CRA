import React from 'react';
import { useForm } from 'react-hook-form';
import { addCustomer } from '../services/customerApi';

export default function Configuration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Submitting data:", data);
      await addCustomer(data);
      alert('Customer data saved via API!');
      reset();
    } catch (error) {
      console.error('Error saving customer:', error);
      alert('Failed to save customer.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Add Customer Configuration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          ['cifid', 'CIF ID'],
          ['caseid', 'Case ID'],
          ['obligationtype', 'Obligation Type'],
          ['customertype', 'Customer Type'],
          ['customername', 'Customer Name'],
          ['customeraddress', 'Customer Address'],
          ['customerphone', 'Customer Phone Number'],
          ['customeremail', 'Customer Email'],
          ['customerstatus', 'Customer Status'],
          ['accountnumber', 'Account Number'],
          ['accountstatus', 'Account Status'],
          ['casestatus', 'Case Status'],
          ['casesubstatus', 'Case Sub Status']
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
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Save Customer
          </button>
        </div>
      </form>
    </div>
  );
}
