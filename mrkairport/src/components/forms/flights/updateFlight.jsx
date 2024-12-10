import React, { useState, useEffect } from "react";
import { getAllAirports } from "../../../services/airportService"; 

const UpdateFlight = ({ flight, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ ...flight });
  const [airports, setAirports] = useState([]); 

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const airportData = await getAllAirports();
        setAirports(airportData); 
      } catch (error) {
        console.error("Error fetching airports:", error);
      }
    };

    fetchAirports();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const departureTime = new Date(formData.scheduledDepartureTime);
    const arrivalTime = new Date(formData.scheduledArrivalTime);

    if (arrivalTime <= departureTime) {
      alert("Scheduled arrival time must be after the scheduled departure time.");
      return;
    }

    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="UpdateForm">
      <div>
        <label>Airline:</label>
        <input
          type="text"
          name="airline"
          value={formData.airline}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Scheduled Departure:</label>
        <input
          type="datetime-local"
          name="scheduledDepartureTime"
          value={formData.scheduledDepartureTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Scheduled Arrival:</label>
        <input
          type="datetime-local"
          name="scheduledArrivalTime"
          value={formData.scheduledArrivalTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Departure IATA:</label>
        <select
          name="departureIata"
          value={formData.departureIata}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Departure IATA
          </option>
          {airports.map((airport) => (
            <option key={airport.iataCode} value={airport.iataCode}>
              {airport.iataCode} - {airport.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Arrival IATA:</label>
        <select
          name="arrivalIata"
          value={formData.arrivalIata}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Arrival IATA
          </option>
          {airports.map((airport) => (
            <option key={airport.iataCode} value={airport.iataCode}>
              {airport.iataCode} - {airport.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="On Time">On Time</option>
          <option value="In-Flight">In-Flight</option>
          <option value="Landed">Landed</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div>
        <label>Gate:</label>
        <input
          type="text"
          name="gate"
          value={formData.gate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Terminal:</label>
        <input
          type="text"
          name="terminal"
          value={formData.terminal}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Flight</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateFlight;
