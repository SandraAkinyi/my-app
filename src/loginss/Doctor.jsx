import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './doctor.scss';

const Doctors = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    userId: '',
    generatedreport: '',
    drugName: '',
    drugDuration: '',
    labReport: '', // New state to store lab report
  });

  const [messageData, setMessageData] = useState({
    to: '',
    message: '',
  });

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const { username, userId, generatedreport, drugName, drugDuration, labReport } = formData;

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
  
    // Schedule sending the email every 2 minutes for a total of 6 minutes
    let count = 0;
    const intervalId = setInterval(async () => {
      count++;
      if (count <= 3) {
        try {
          const response = await axios.post('http://localhost:5000/send-message', messageData);
          if (response.status === 200) {
            console.log('Message sent successfully');
          } else {
            console.error('Error sending message:', response.statusText);
          }
        } catch (error) {
          console.error('Error sending message:', error.message);
        }
      } else {
        clearInterval(intervalId);
      }
    }, 2 * 60 * 1000); // Run every 2 minutes (2 * 60 * 1000 milliseconds)
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
    <div className="top2">
      <div className="blur-overlay2"></div>
      <div className="doctor">
        <section className="top-section">
          <div className="imgContainer">
            <h1 className="image-title">Doctors' platform</h1>
            <img src="pics/r2.jpg" alt="" />
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
          </div>

          <div className="drug-administration-section">
            <div className="column">
              <div className="form-group">
                <label className="newlabel" htmlFor="drugName">Drug Administration and Recommendations</label>
                <textarea
                id="drugName"
                name="drugName"
                placeholder="Drug Name"
                value={drugName}
                onChange={handleChange}
                className="large-textarea"
              />
              </div>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}
          {isRegistered && <div className="success-message">Successful!</div>}
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
              placeholder="patientemail@gmail.com"
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
      </div>

      <div className="button-container">
      <button className="custom-button"><Link to="/" className="custom-button">LogOut</Link></button>
      </div>
    </div>
    </div>
  );
};

export default Doctors;
