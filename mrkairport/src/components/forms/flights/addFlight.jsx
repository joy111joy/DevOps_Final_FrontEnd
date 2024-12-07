import React, { useState } from "react";

function AddFlight({ onSubmit }) {
  const [flightData, setFlightData] = useState({
    flightNumber: "",
    airline: "",
    scheduledDepartureTime: "",
    scheduledArrivalTime: "",
    status: "",
    gate: "",
    terminal: "",
    departureIATA: "",
    arrivalIATA: "",
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
    onSubmit(flightData); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
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
        <input
        type="text"
        name="departureIATA"
        placeholder="Departure IATA"
        value={flightData.departureIATA}
        onChange={handleChange}
        required
      />
        <input
        type="text"
        name="arrivalIATA"
        placeholder="Arrival IATA"
        value={flightData.arrivalIATA}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Flight</button>
    </form>
  );
}

export default AddFlight;
