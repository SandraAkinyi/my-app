// Register.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './registerpage.scss'; // Import the Sass file

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    userId: '',
    phoneNumber: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const { username, userId, phoneNumber, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/register', formData);
      console.log(res.data);
      setIsRegistered(true);

      // Navigate to the login page after successful registration
      navigate('/patient'); // Use navigate directly without .push()
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="background-container">
    <div className="blur-overlay"></div>
    <div className="register-container">
      {isRegistered && <p className="success-message">Successfully registered! You can now log in.</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" placeholder="User Name" value={username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input type="text" id="userId" name="userId" placeholder="User ID" value={userId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <p className='prr'>
        Already have an account? 
      </p>
      <Link to="/patient" className="login-link">Login here</Link>
    </div>
    </div>
  );
};

export default Register;
