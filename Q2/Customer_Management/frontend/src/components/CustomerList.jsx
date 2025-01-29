import React, { useState, useEffect } from 'react';
import { getCustomers, deleteCustomer } from '../services/customerService';
import { Link } from 'react-router-dom';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  const handleDelete = async (customerName) => {
    await deleteCustomer(customerName);
    setCustomers(customers.filter(customer => customer.customerName !== customerName));
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerName}>
            {customer.customerName} ({customer.city}, {customer.phone}, {customer.emailid})
            <button onClick={() => handleDelete(customer.customerName)}>Delete</button>
            <Link to={`/edit-customer/${customer.customerName}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
