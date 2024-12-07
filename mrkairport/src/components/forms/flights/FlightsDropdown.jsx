import React, { useState } from "react";
import AddFlight from "./addFlight";
import UpdateFlight from "./updateFlight";
import { addFlight, deleteFlight, setArrival, setDeparture } from "../../../services/flightService";

function FlightsDropdown({
  flights,
  setFlights,
  handleUpdateClick,
  selectedFlight,
  handleUpdateSubmit,
}) {
  const [showAddFlightForm, setShowAddFlightForm] = useState(false);

  const handleAddFlight = async (flightData) => {
    try {
      const newFlight = await addFlight(flightData);
  
      await setDeparture(flightData.departureIATA, flightData.flightNumber);
      await setArrival(flightData.arrivalIATA, flightData.flightNumber);
  
      setFlights((prevFlights) => [...prevFlights, newFlight]);
    } catch (error) {
      console.error("Error adding flight or setting departure/arrival:", error);
      alert("Failed to add flight or set departure/arrival. Please try again.");
    }
  };
  
  

  const handleDelete = async (flightNumber) => {
    try {
      await deleteFlight(flightNumber);
      setFlights((prevFlights) =>
        prevFlights.filter((flight) => flight.flightNumber !== flightNumber),
      );
    } catch (error) {
      console.error("Error deleting flight:", error);
      alert("Failed to delete flight. Please try again.");
    }
  };

  return (
    <>
      <button
        onClick={() => setShowAddFlightForm(!showAddFlightForm)}
        style={{ marginBottom: "10px", cursor: "pointer" }}
      >
        Add Flight
      </button>

      {showAddFlightForm && <AddFlight onSubmit={handleAddFlight} />}

      <div>
        <h3>Flight List</h3>
        <ul>
          {flights.map((flight) => (
            <li key={flight.flightNumber}>
              Flight Number: {flight.flightNumber} - {flight.airline} | Status:{" "}
              {flight.status}
              <button onClick={() => handleUpdateClick(flight)}>Update</button>
              <button onClick={() => handleDelete(flight.flightNumber)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedFlight && (
        <UpdateFlight
          flight={selectedFlight}
          onSubmit={handleUpdateSubmit}
          onCancel={() => handleUpdateClick(null)}
        />
      )}
    </>
  );
}

export default FlightsDropdown;
