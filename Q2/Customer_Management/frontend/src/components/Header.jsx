import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Customer Management App</h1>
      <nav>
        <Link to="/">Display all customers</Link>
        <Link to="/add-customer">Add New Customer</Link>
      </nav>
    </header>
  );
};

export default Header;
