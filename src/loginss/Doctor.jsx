

import React from 'react';
import './doctor.scss'; 

const Doctors = () => {
  return (
    <div className="doctor">
      <section className="top-section">
        <div className="imgContainer">
        <h1 className="image-title">Doctors' platform</h1>
          <img src="pics/r2.jpg" alt="" />
        
        </div>
      </section>
      <section className="patient-info-section">
        <div className="patient-info-container">
          <label>Patient Name:</label>
          <input type="text" placeholder="Enter patient's name" />

          <label>Patient ID:</label>
          <input type="text" placeholder="Enter patient's ID" />
        </div>
      </section>
      <div className="typing-platform">
       
        <textarea
          placeholder="Generate your report here"
        />
      </div>
      <section className="drug-administration-section">
        <div className="column">
        </div>
        <div className="column">
          <label>Drug:</label>
          <input type="text" placeholder="Enter drug name" />

          <label>Time Duration:</label>
          <input type="text" placeholder="Enter time duration" />
        </div>
      
      </section>
      <div className="button-container">
          <button className="custom-button">Submit</button>
          <button className="custom-button">Logout</button>
        </div>
    </div>
    
  );
};

export default Doctors;
