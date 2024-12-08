import React, { useState } from "react";

function AddAirport({ onSubmit }) {
  const [airportData, setAirportData] = useState({
    iataCode: "",
    name: "",
    location: "", // Only location field now
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAirportData({ ...airportData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(airportData); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        type="text"
        name="iataCode"
        placeholder="IATA Code"
        value={airportData.iataCode}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Airport Name"
        value={airportData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"  // Only location field now
        placeholder="Location"
        value={airportData.location}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Airport</button>
    </form>
  );
}

export default AddAirport;
