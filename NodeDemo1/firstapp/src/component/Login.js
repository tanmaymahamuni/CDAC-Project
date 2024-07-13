import React, { useState } from 'react';
//import "bootstrap/dist/css/bootstrap.css"
const LoginPage = () => {
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [customerError, setCustomerError] = useState('');

  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPassword, setSellerPassword] = useState('');
  const [sellerError, setSellerError] = useState('');

  const handleCustomerLogin = async (event) => {
    event.preventDefault();
    setCustomerError('');

    if (!customerEmail || !customerPassword) {
      setCustomerError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fakeLogin(customerEmail, customerPassword);
      if (response.success) {
        alert('Customer login successful!');
      } else {
        setCustomerError(response.message);
      }
    } catch (error) {
      setCustomerError('An unexpected error occurred. Please try again.');
    }
  };

  const handleSellerLogin = async (event) => {
    event.preventDefault();
    setSellerError('');

    if (!sellerEmail || !sellerPassword) {
      setSellerError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fakeLogin(sellerEmail, sellerPassword);
      if (response.success) {
        alert('Seller login successful!');
      } else {
        setSellerError(response.message);
      }
    } catch (error) {
      setSellerError('An unexpected error occurred. Please try again.');
    }
  };

  const fakeLogin = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid email or password' });
        }
      }, 1000);
    });
  };

  return (

   
    <div className="form-container">
      <div className="form-control">
        <h2 className="title">Customer Login</h2>
        {customerError && <p className="error-message">{customerError}</p>}
        <form onSubmit={handleCustomerLogin}>
          <div className="input-field">
            <input
              type="email"
              id="customer-email"
              className="input"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
            <label htmlFor="customer-email" className="label">Email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="customer-password"
              className="input"
              value={customerPassword}
              onChange={(e) => setCustomerPassword(e.target.value)}
              required
            />
            <label htmlFor="customer-password" className="label">Password</label>
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <div className="register-link">
          <a href="/register/customer">Register as Customer</a>
        </div>
      </div>

      <div className="form-control">
        <h2 className="title">Vendor Login</h2>
        {sellerError && <p className="error-message">{sellerError}</p>}
        <form onSubmit={handleSellerLogin}>
          <div className="input-field">
            <input
              type="email"
              id="seller-email"
              className="input"
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
              required
            />
            <label htmlFor="seller-email" className="label">Email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="seller-password"
              className="input"
              value={sellerPassword}
              onChange={(e) => setSellerPassword(e.target.value)}
              required
            />
            <label htmlFor="seller-password" className="label">Password</label>
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <div className="register-link">
          <a href="/register/seller">Register as Vendor</a>
        </div>
      </div>
    </div>

 
  );
};

export default LoginPage;
