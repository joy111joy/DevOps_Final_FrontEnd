import React, { useState, useEffect } from "react";
import { getAllAirports } from "../../../services/airportService";

function AddFlight({ onSubmit }) {
  const [flightData, setFlightData] = useState({
    flightNumber: "",
    airline: "",
    scheduledDepartureTime: "",
    scheduledArrivalTime: "",
    status: "",
    gate: "",
    terminal: "",
    departureIata: "",
    arrivalIata: "",
  });

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
    setFlightData({
      ...flightData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const departureTime = new Date(flightData.scheduledDepartureTime);
    const arrivalTime = new Date(flightData.scheduledArrivalTime);

    if (arrivalTime <= departureTime) {
      alert("Arrival time must be after departure time.");
      return;
    }

    onSubmit(flightData);
  };

  return (
    <form onSubmit={handleSubmit} className="AddForm">
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
        name="airline"
        placeholder="Airline"
        value={flightData.airline}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="scheduledDepartureTime"
        placeholder="Departure Time"
        value={flightData.scheduledDepartureTime}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="scheduledArrivalTime"
        placeholder="Arrival Time"
        value={flightData.scheduledArrivalTime}
        onChange={handleChange}
        required
      />
      <select
        name="departureIata"
        value={flightData.departureIata}
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
      <select
        name="arrivalIata"
        value={flightData.arrivalIata}
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
      <select
        name="status"
        value={flightData.status}
        onChange={handleChange}
        required
      >
        <option value="On Time">On Time</option>
        <option value="In-Flight">In-Flight</option>
        <option value="Landed">Landed</option>
        <option value="Delayed">Delayed</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <input
        type="text"
        name="gate"
        placeholder="Gate"
        value={flightData.gate}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="terminal"
        placeholder="Terminal"
        value={flightData.terminal}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddFlight;
