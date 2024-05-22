import React from 'react';
import './department.scss';

const Department = () => {
  return (
    <div className="department">
      <h1>Explore the world</h1>
      <div className="blog1">
        <div className="card">
          <img src="pics/x3.webp" alt="Card 1" />
          <div className="about">
            <h2>Nature</h2>
            <p> Immerse yourself in the serene beauty of lush forests, crystal-clear lakes, and majestic mountains.</p>
          </div>
        </div>
        <div className="card">
          <img src="pics/a3.jpg" alt="Card 2" />
          <div className="about">
            <h2>Culture</h2>
            <p>Embark on a journey through vibrant cultures, where traditions are cherished, and stories are woven into the fabric of everyday life.</p>
          </div>
        </div>
        <div className="card">
          <img src="pics/pe6.jpg" alt="Card 3" />
          <div className="about">
            <h2>Destination</h2>
            <p> Set your sights on a destination brimming with endless possibilities and hidden treasures waiting to be discovered.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
