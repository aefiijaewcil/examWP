import React, { useEffect, useState } from 'react';
import { getCustomers, updateCustomer } from '../services/customerService';
import { useParams, useHistory } from 'react-router-dom';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState({});
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [emailid, setEmailid] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchCustomer = async () => {
      const customers = await getCustomers();
      const currentCustomer = customers.find((c) => c.customerName === id);
      if (currentCustomer) {
        setCustomer(currentCustomer);
        setCustomerName(currentCustomer.customerName);
        setCity(currentCustomer.city);
        setPhone(currentCustomer.phone);
        setEmailid(currentCustomer.emailid);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCustomer = { customerName, city, phone, emailid };
    try {
      await updateCustomer(id, updatedCustomer);
      history.push('/');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Customer</h2>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        value={emailid}
        onChange={(e) => setEmailid(e.target.value)}
        required
      />
      <button type="submit">Update Customer</button>
    </form>
  );
};

export default CustomerDetails;
