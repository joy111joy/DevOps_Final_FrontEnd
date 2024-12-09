import React, { useState } from "react";

const UpdateAirport = ({ airport, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ ...airport });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit}
    className="UpdateForm"
    >
      <div>
        <label>IATA Code:</label>
        <input
          type="text"
          name="iataCode"
          value={formData.iataCode}
          onChange={handleChange}
          disabled
        />
      </div>
      <div>
        <label>Airport Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Airport</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateAirport;
