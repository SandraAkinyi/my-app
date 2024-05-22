import React from 'react';
import './AboutUs.scss'; // Import CSS file for styling

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="header">
        <h1>Why Us ?</h1>
      </header>
      <div className="content">
        <div className="text-content">
          <p>We believe that traveling is not just about visiting new places; it's about immersing yourself in diverse cultures,
             exploring breathtaking landscapes, and creating lifelong memories.
             Whether you're a seasoned globetrotter or planning your first adventure, our platform is designed to inspire,
             inform, and assist you every step of the way.</p>
          <p>Discover a wealth of destination guides, travel tips, and insider recommendations curated by our team of passionate travelers. 
            From bustling cities to remote natural wonders, we've got you covered with comprehensive information to help you plan your perfect 
            itinerary.</p>
          <p>Browse through a diverse range of accommodation options, 
             from luxurious resorts to cozy bed and breakfasts, all handpicked to ensure comfort, convenience, and authenticity. 
             Book with confidence knowing that we've partnered with trusted providers to offer you the best deals and unparalleled 
             customer service..</p>
        </div>
        <div className="image-content">
          <img src="pics/x6.webp" alt="About Us" className="about-us-image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
