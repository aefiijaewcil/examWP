import React, { useState } from 'react';
import { addCustomer } from '../services/customerService';

const AddCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [emailid, setEmailid] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = { customerName, city, phone, emailid };
    await addCustomer(customer);
    setCustomerName('');
    setCity('');
    setPhone('');
    setEmailid('');
  };

  return (
    <div>
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email ID"
          value={emailid}
          onChange={(e) => setEmailid(e.target.value)}
        />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
