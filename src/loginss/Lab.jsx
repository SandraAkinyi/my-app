import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './doctor.scss';

const Lab = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    userId: '',
    generatedreport: '',
  });

  const [messageData, setMessageData] = useState({
    to: '',
    message: '',
  });

  const [isEmailSent, setIsEmailSent] = useState(false); // Correction here
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const { username, userId, generatedreport } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear any previous errors when the user starts typing
  };

  const handleChange2 = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
    setIsEmailSent(false); // Clear the success message if the user starts typing again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/labreport', formData);
      console.log(res.data);
      setIsRegistered(true);
      navigate('/labtechprofile');
    } catch (err) {
      setError('Failed. Please check your information.'); // Display an error message
      console.error(err.response.data);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        setIsEmailSent(true);
        setMessageData({ to: '', message: '' }); // Clear the message input fields after sending
      } else {
        console.error('Error sending message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div className="top2">
      <div className="blur-overlay2"></div>
      <div className="doctor">
        <section className="top-section">
          <div className="imgContainer">
            <h1 className="image-title">Lab platform</h1>
            <img src="pics/h1.jpg" alt="" />
          </div>
        </section>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="patient-info-container">
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" id="username" name="username" placeholder="User Name" value={username} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <input type="text" id="userId" name="userId" placeholder="User ID" value={userId} onChange={handleChange} />
            </div>
          </div>

          <div className="report-area">
            <div className="report">
              <textarea
                id="generatedreport"
                name="generatedreport"
                placeholder="Generate report"
                value={generatedreport}
                onChange={handleChange}
                className="large-textarea"
              />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}
          {isRegistered && <div className="success-message">successful!</div>}
          <button type="submit" className="register-button">
            Submit
          </button>
        </form>

        <div className="form2">
          <form onSubmit={handleSend}>
            <input
              type="email"
              id="to"
              name="to"
              placeholder="patientemail@gmail"
              value={messageData.to}
              onChange={handleChange2}
            />
            <textarea
              id="message"
              name="message"
              value={messageData.message}
              onChange={handleChange2}
              rows="4"
              required
            ></textarea>
            {error && <div className="error-message">{error}</div>}
            {isEmailSent && <div className="success-message">Email sent successfully!</div>}
            <button type="submit">Send Email</button>
          </form>
        </div>

        <div className="button-container">
          <button className="custom-button"><Link to="/" className="custom-button">LogOut</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Lab;
