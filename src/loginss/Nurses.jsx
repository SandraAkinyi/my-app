import './nurses.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Nurses = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    userId: '',
    docsreport: '',
    updates: ''
  });

  const { username, userId,  updates } = formData;
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  // State to store the doctor's report
  const [doctorsReport, setDoctorsReport] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear any previous errors when the user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/nursesreport', formData);
      console.log(res.data);
      setIsRegistered(true);
      navigate('/nursesprofile');
    } catch (err) {
      setError('failed. Please check your information.'); // Display an error message
      console.error(err.response.data);
    }
  };

  const handleUpdateClick = async () => {
    try {
      // Fetch the doctor's report based on the user ID
      const response = await axios.get(`http://localhost:5000/doctors-report/${userId}`);
      setDoctorsReport(response.data);
    } catch (error) {
      console.error('Error fetching doctors report:', error);
    }
  };

  useEffect(() => {

    handleUpdateClick();
  }, [userId]); 

  return (
    <div className="top">
      <div className="blur-overlay"></div>
      <div className="nurse">
        <div className="nurses">
          <section className="top-section">
            <div className="imgContainer">
              <h1 className="image-title">Nurses' platform</h1>
              <img src="pics/b1.webp" alt="" />
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
                <button type="button" className="update-button" onClick={handleUpdateClick}>
                  Get Updates
                </button>
              </div>
            </div>

            <div className="report-area">
              <div className="report">
                <label htmlFor="docsreport">Doctors Report</label>
                <textarea
                  id="docsreport"
                  name="docsreport"
                  placeholder="Doctors report"
                  value={doctorsReport} // Display the fetched doctor's report
                  onChange={handleChange}
                  className="large-textarea"
                />

                <label htmlFor="updates"> Daily Updates</label>
                <textarea
                  id="updates"
                  name="updates"
                  placeholder="Daily updates"
                  value={updates}
                  onChange={handleChange}
                  className="large-textarea"
                />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}
            {isRegistered && <div className="success-message">successful!</div>}
            <button type="submit" className="register-button">
              update
            </button>
          </form>

          <div className="button-container">
            <button className="custom-button"><Link to="/" className="custom-button">LogOut</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nurses;
