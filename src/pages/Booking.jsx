
import React from 'react';
import {  Link } from 'react-router-dom';
import './bookings.scss'; // Import CSS file for styling

function Booking() {
  return (
    <div className="booking-container">
      <div className="image-container">
        <img src="pics/x4.jpg" alt="Booking" className="booking-image" />
      </div>
      <div className="booking-info">
        <h2>Book Your Adventure Now!</h2>
        <p>Discover the wonders of the world with our guided tours. Whether you're craving adrenaline-pumping activities or seeking serene landscapes, we've got the perfect adventure waiting for you.</p>
        <p>Duration: 3 days</p>
        <p>Price: $299</p>
        <Link to="/bookingpage" className="book-button">Book Now</Link>
      </div>
    </div>
  );
}

export default Booking;
