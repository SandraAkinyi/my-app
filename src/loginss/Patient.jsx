// src/components/nurses/Nurse.jsx
import React from 'react';
import './patient.scss';

const Patient = () => {
  return (
    <div className="patient" id="patient">
      <section className="top-section">
        <div className="imgContainer">
          <h1 className="image-title">Welcome</h1>
          <img src="pics/s1.webp" alt="" />
        </div>
      </section>
      <div className="button-container">
        <button className="custom-button">Lab inquiry</button>
        <button className="custom-button">Body Inquiry</button>
        <button className="custom-button">Phamacy</button>
        <button className="custom-button">Generl Report</button>
      </div>  

      <div className="typing-platform">
        <textarea
          placeholder=" press enter to Generate Information"
        />
       
      </div>

      <div className="button-container">
        <button className="custom-button">LogOut</button>
       
      </div>
    </div>
  );
}
export default Patient;
