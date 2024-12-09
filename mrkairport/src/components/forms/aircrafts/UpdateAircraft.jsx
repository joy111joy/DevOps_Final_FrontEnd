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
    <form 
    className="UpdateForm"
    onSubmit={handleSubmit}
    >
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
        <label>Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Range (km):</label>
        <input
          type="number"
          name="flightRange"
          value={formData.flightRange}
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
