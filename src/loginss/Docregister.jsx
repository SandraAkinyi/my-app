// Register.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './staff.scss'; // Import the Sass file

const Staffregister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    staffId: '',
    phoneNumber: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { username, staffId, phoneNumber, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/staffregister', formData);
      console.log(res.data);
      setIsRegistered(true);

      // Navigate to the login page after successful registration
      navigate('/doclogin');
    } catch (err) {
      console.error(err.response.data);
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="background-container">
    <div className="blur-overlay3"></div>
    <div className="register-container">
      {isRegistered && <p className="success-message">Successfully registered! You can now log in.</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" placeholder="User Name" value={username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="userId">Staff ID</label>
          <input type="text" id="staffId" name="staffId" placeholder="staff ID" value={staffId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        </div>
        <button type="submit" className="register-button" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p className='prr'>
        Already have an account? 
      </p>
      <Link to="/doclogin" className="login-link">Login here</Link>
    </div>
    </div>
  );
};

export default Staffregister;
