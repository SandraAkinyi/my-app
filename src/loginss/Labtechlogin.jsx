import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './stafflogin.scss';

const Labtechlogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    labId: '',
    password: '',
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { labId, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/lablogin', formData);

      if (res.status === 200) {
        console.log('Login successful');
        setLoginSuccess(true);
        setLoginError('');
        navigate('/labtech'); 
      } else if (res.status === 400) {
        console.log('Invalid credentials');
        setLoginError('Invalid credentials');
      } else {
        console.log('Error logging in');
        setLoginError('Error logging in');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Error logging in');
    }
  };

  return (
    
    <div className="background-container">
      <div className="blur-overlay3"></div>
      <div className="login-container">
      {loginError && <p className="error-message">{loginError}</p>}
      {loginSuccess && <p className="success-message">Login successful!</p>}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
  <label htmlFor="staffId">User ID</label>
  <input type="text" id="labId" name="labId" placeholder="lab Id" value={labId} onChange={handleChange} />
</div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="prr">
        Don't have an account? 
      </p>
      <Link to="/labtechregister" className="register-link">Register here</Link>
      </div>
      
    </div>
  );
};

export default Labtechlogin;
