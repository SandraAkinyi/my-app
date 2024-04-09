import React, { useState } from 'react';
import './bmi.scss';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)) * 10000;
      setBMI(bmiValue.toFixed(2));
    } else {
      setBMI(null);
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label htmlFor="height">Height (cm):</label>
        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI: {bmi}</p>}
    </div>
  );
};

export default BMICalculator;
