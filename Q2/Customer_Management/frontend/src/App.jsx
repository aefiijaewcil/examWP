import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import Header from './components/Header';
import EditCustomer from './components/EditCustomer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
