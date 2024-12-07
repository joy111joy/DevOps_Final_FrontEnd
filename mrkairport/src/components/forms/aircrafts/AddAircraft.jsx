import React, { useState } from "react";

function AddAircraft({ onSubmit }) {
  const [aircraftData, setAircraftData] = useState({
    registrationNumber: "",
    model: "",
    manufacturer: "",
    seatingCapacity: "",
    range: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAircraftData({
      ...aircraftData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(aircraftData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input
        type="text"
        name="registrationNumber"
        placeholder="Registration Number"
        value={aircraftData.registrationNumber}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={aircraftData.model}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="manufacturer"
        placeholder="Manufacturer"
        value={aircraftData.manufacturer}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="seatingCapacity"
        placeholder="Seating Capacity"
        value={aircraftData.seatingCapacity}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="range"
        placeholder="Range (km)"
        value={aircraftData.range}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Aircraft</button>
    </form>
  );
}

export default AddAircraft;
