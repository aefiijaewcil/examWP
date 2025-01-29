import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomerById, updateCustomer } from '../services/customerService';

const EditCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [emailid, setEmailid] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomer = async () => {
      const customerData = await getCustomerById(id);
      setCustomerName(customerData.customerName);
      setCity(customerData.city);
      setPhone(customerData.phone);
      setEmailid(customerData.emailid);
    };
    fetchCustomer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCustomer = { customerName, city, phone, emailid };
    await updateCustomer(id, updatedCustomer);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Customer</h2>
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
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
};

export default EditCustomer;
