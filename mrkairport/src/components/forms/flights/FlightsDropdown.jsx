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



      <div>
        <h3>Flight List</h3>
        <ul>
          {flights.map((flight) => (
            <li key={flight.flightNumber}>
              <p>Flight Number: {flight.flightNumber} - {flight.airline} | Status:{" "}
              {flight.status}</p>
              <button onClick={() => handleUpdateClick(flight)} className="UpdateBtn">Update</button>
              <button onClick={() => handleDelete(flight.flightNumber)} className="DeleteBtn">
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
            <button
        onClick={() => setShowAddFlightForm(!showAddFlightForm)}
        className="AddBtn"
      >
        Add Flight
      </button>
      {showAddFlightForm && <AddFlight onSubmit={handleAddFlight} />}

    </>
  );
}

export default FlightsDropdown;
