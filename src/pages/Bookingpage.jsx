import React, { useState } from 'react';
import './bookingpage.scss'; // Import CSS file for styling

const BookingPage = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    days: 1,
    type: 'individual',
    numberOfPeople: 1
  });

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', bookingDetails);
  };

  const destinations = [
    { id: 1, name: 'Beach Resort', location: 'Diani', amount: '$500', imageUrl: 'pics/x3.webp' },
    { id: 2, name: 'Mountain Lodge', location: 'Samburu', amount: '$700', imageUrl: 'pics/x3.webp' },
    { id: 3, name: 'Beach Resort', location: 'Mombasa', amount: '$550', imageUrl: 'pics/x3.webp' },
    { id: 4, name: 'Nderit Gate', location: 'Nakuru', amount: '$450', imageUrl: 'pics/x3.webp' },
    { id: 5, name: 'Amboseli Park', location: 'Kilimanjaro', amount: '$600', imageUrl: 'pics/x3.webp' },
    { id: 6, name: 'Oloololo Gate', location: 'Maasai Mara', amount: '$650', imageUrl: 'pics/x3.webp' }
  ];

  return (
    <div className="booking-container1">
      <h7>Book Your Vacation</h7>
      <div className="destinations-container1">
        <h8>Select Destination</h8>
        <ul>
          {destinations.map(destination => (
            <li key={destination.id} onClick={() => handleDestinationSelect(destination)}>
              <div className="destination-item1">
                <img src={destination.imageUrl} alt={destination.name} className="destination-image1" />
                <div>
                  <p>{destination.name}</p>
                  <p>{destination.location}</p>
                  <p>{destination.amount}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedDestination && (
        <div className="destination-form-container1">
          <div className="booking-form-container1">
            <h9>Booking Details for {selectedDestination.name}</h9>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={bookingDetails.name} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Number of Days:
                <input type="number" name="days" value={bookingDetails.days} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Type of Vacation:
                <select name="type" value={bookingDetails.type} onChange={handleInputChange}>
                  <option value="individual">Individual</option>
                  <option value="group">Group</option>
                </select>
              </label>
              {bookingDetails.type === 'group' && (
                <label>
                  Number of People:
                  <input type="number" name="numberOfPeople" value={bookingDetails.numberOfPeople} onChange={handleInputChange} />
                </label>
              )}
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="selected-destination-info">
            <h9>Selected Destination</h9>
            <div>
              <img src={selectedDestination.imageUrl} alt={selectedDestination.name} />
              <div>
                <p>{selectedDestination.name}</p>
                <p>{selectedDestination.location}</p>
                <p>{selectedDestination.amount}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
