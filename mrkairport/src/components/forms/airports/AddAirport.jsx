import React, { useState } from "react";

function AddAirport({ onSubmit }) {
  const [airportData, setAirportData] = useState({
    iataCode: "",
    name: "",
    location: "", 
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
      className="AddForm"
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
        name="location"  
        placeholder="Location"
        value={airportData.location}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddAirport;
