import React from 'react';
import axios from 'axios'; // Import Axios
import './patient.scss';

const Patient = () => {

  const generateLabReport = () => {
    const data = {
      username: 'sampleUsername',
      userId: 'sampleUserId',
      generatedreport: 'Lab report data goes here'
    };

    axios.post('http://localhost:5000/labreport', data)
      .then(response => {
        console.log(response.data); // Log response from server
      })
      .catch(error => {
        console.error(error); // Log any errors
      });
  };

  const generateDoctorReport = () => {
    const data = {
      username: 'sampleUsername',
      userId: 'sampleUserId',
      generatedreport: 'Doctor report data goes here',
      drugName: 'Sample Drug',
      drugDuration: '3 times a day'
    };

    axios.post('http://localhost:5000/docreport', data)
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error(error); 
      });
  };



  return (
    <div className="patient" id="patient">
      
      <button className="custom-button" onClick={generateLabReport}>Generate Lab Report</button>
      <button className="custom-button" onClick={generateDoctorReport}>Generate Doctor's Report</button>
     
    </div>
  );
}

export default Patient;
