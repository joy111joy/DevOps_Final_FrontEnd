import React, { useState } from 'react';

function AddFlight({ onSubmit }) {
  const [flightData, setFlightData] = useState({
    flightNumber: '',
    departure: '',
    arrival: '',
    departureTime: '',
    arrivalTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData({
      ...flightData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(flightData); // Pass the flight data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type="text"
        name="flightNumber"
        placeholder="Flight Number"
        value={flightData.flightNumber}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="departure"
        placeholder="Departure Airport"
        value={flightData.departure}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="arrival"
        placeholder="Arrival Airport"
        value={flightData.arrival}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="departureTime"
        placeholder="Departure Time"
        value={flightData.departureTime}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="arrivalTime"
        placeholder="Arrival Time"
        value={flightData.arrivalTime}
        onChange={handleChange}
        required
      />
      <button type="submit" style={{ marginTop: '10px' }}>Add Flight</button>
    </form>
  );
}

export default AddFlight;
