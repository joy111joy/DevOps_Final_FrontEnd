import React, { useState } from "react";

const UpdateAircraft = ({ aircraft, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ ...aircraft });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Registration Number:</label>
        <input
          type="text"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Model:</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Manufacturer:</label>
        <input
          type="text"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Seating Capacity:</label>
        <input
          type="number"
          name="seatingCapacity"
          value={formData.seatingCapacity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Range (km):</label>
        <input
          type="number"
          name="range"
          value={formData.range}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Aircraft</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateAircraft;

