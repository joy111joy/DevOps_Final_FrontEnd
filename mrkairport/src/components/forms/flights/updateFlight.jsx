import React, { useState } from "react";

const UpdateFlight = ({ flight, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ ...flight });

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
        <label>Flight Number:</label>
        <input
          type="text"
          name="flightNumber"
          value={formData.flightNumber}
          onChange={handleChange}
        />
      </div>
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
