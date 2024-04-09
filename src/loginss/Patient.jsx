import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link  } from 'react-router-dom';
import './patient.scss';
import Bmi from './Bmi'; // Import the BMI Calculator component


const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: '',
   
    labReport: '', 
  });

  const [messageData, setMessageData] = useState({
    to: '',
    message: '',
  });

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const { userId,  labReport } = formData;

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
      const res = await axios.post('http://localhost:5000/docreport', formData);
      console.log(res.data);
      setIsRegistered(true);
      navigate('/doctorprofile');
    } catch (err) {
      setError('Failed. Please check your information.'); // Display an error message
      console.error(err.response.data);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/send-message', messageData);
  
      if (response.status === 200) {
        setIsEmailSent(true);
        setMessageData({ to: '', message: '' }); // Clear the message input fields after sending
      } else {
        console.error('Error sending message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };
  

  const handleGetReports = async () => {
    try {
      const labRes = await axios.get(`http://localhost:5000/lab-report/${userId}`);

      setFormData({
        ...formData,
        labReport: labRes.data,
      });
    } catch (err) {
      console.error('Error fetching reports:', err);
    }
  };

  return (
    <div className="top3">
      <div className="blur-overlay2"></div>
      <div className="container">
        <div className="image-container">
          <h1 className="image-title">Patients</h1>
          <img src="pics/n2.webp" alt="" />
          <div className="bmi-calculator-container">
        <Bmi/>
      </div>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="patient-info-container">
              <div className="form-group">
                <label htmlFor="userId">User ID</label>
                <input type="text" id="userId" name="userId" placeholder="User ID" value={userId} onChange={handleChange} />
              </div>
            </div>

            <div className="report-area">
             
              <button type="button" className="register-button" onClick={handleGetReports}>
                Get Lab Reports
              </button>

              <textarea
                id="labReport"
                name="labReport"
                placeholder="Lab report"
                value={labReport}
                onChange={handleChange}
                className="large-textarea"
              />
            </div>
          </form>

          <div className="form2">
            <form onSubmit={handleSend}>
              <input
                type="email"
                id="to"
                name="to"
                placeholder="doctors'email@gmail.com"
                value={messageData.to}
                onChange={handleChange2}
                required
              />
              <textarea
                id="message"
                name="message"
                value={messageData.message}
                onChange={handleChange2}
                rows="4"
                placeholder="Enter your message..."
                required
              ></textarea>
            
              <button type="submit">Send Email</button>
            </form>
            <div className="button-container">
        <button className="custom-button"><Link to="/" className="custom-button">LogOut</Link></button>
      </div>
          </div>
        </div>
    </div>
      </div>

      

     
  );
};

export default Profile;
