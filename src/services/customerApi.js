// src/services/customerApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/customers';

export const getAllCustomers = () => axios.get(API_URL);

export const getCustomerByCifId = (cifid) =>
  axios.get(`${API_URL}?cifid=${cifid}`);

export const addCustomer = (data) => axios.post(API_URL, data);

export const deleteCustomer = (id) => axios.delete(`${API_URL}/${id}`);
