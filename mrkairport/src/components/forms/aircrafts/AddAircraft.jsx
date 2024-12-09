import React, { useState } from "react";

function AddAircraft({ onSubmit }) {
  const [aircraftData, setAircraftData] = useState({
    model: "",
    manufacturer: "",
    aircraftId: "",
    capacity: "",
    flightRange: "",
    speed: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAircraftData({ ...aircraftData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(aircraftData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="AddForm"
    >
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
        type="text"
        name="aircraftId"
        placeholder="Aircraft ID"
        value={aircraftData.aircraftId}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="capacity"
        placeholder="Capacity"
        value={aircraftData.capacity}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="flightRange"
        placeholder="Flight Range"
        value={aircraftData.flightRange}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="speed"
        placeholder="Speed"
        value={aircraftData.speed}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddAircraft;
