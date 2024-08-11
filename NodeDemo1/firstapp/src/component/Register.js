import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    companyName: '',
    mobile: '',
    name: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Add your validation logic here

    try {
      // Simulate an API call
      const response = await fakeRegister(formData);
      if (response.success) {
        alert('Registration successful!');
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  const fakeRegister = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.email && data.name) {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid data' });
        }
      }, 1000);
    });
  };

  return (
    <div className="form-container" style={{marginTop:"5rem"}}>
      <div className="form-control">
        <h2 className="title">Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="email"
              name="email"
              className="input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="label">Email</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="phone"
              className="input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone" className="label">Phone</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="address"
              className="input"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label htmlFor="address" className="label">Address</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="companyName"
              className="input"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <label htmlFor="companyName" className="label">Company Name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="mobile"
              className="input"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <label htmlFor="mobile" className="label">Mobile</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="name"
              className="input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className="label">GST-Number</label>
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
