import React, { useState, useEffect } from "react";
import AddAirport from "./AddAirport";
import UpdateAirport from "./UpdateAirport";
import { addAirport, deleteAirport, updateAirport, getAllAirports } from "../../../services/airportService";

function AirportsDropdown() {
  const [showAddAirportForm, setShowAddAirportForm] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [airports, setAirports] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // Error state for handling errors

  // Fetching the airports when the component mounts
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAllAirports();
        console.log("Fetched airports:", data); // Debugging
        setAirports(data); // Assigning fetched data to state
      } catch (err) {
        console.error("Error fetching airports:", err);
        setError('Failed to load airports. Please try again.');
      }
    };

    fetchAirports();
  }, []);

  // Adding a new airport to the list
  const handleAddAirport = async (airportData) => {
    try {
      // Ensure only location data is passed
      const newAirport = await addAirport(airportData);
      setAirports((prevAirports) => [...prevAirports, newAirport]);
    } catch (error) {
      console.error("Error adding airport:", error);
      alert("Failed to add airport. Please try again.");
    }
  };

  // Deleting an airport from the list
  const handleDeleteAirport = async (iataCode) => {
    try {
      console.log(`Sending DELETE request for airport: ${iataCode}`);
      await deleteAirport(iataCode); // Deleting the airport via API

      // Remove the deleted airport from the state
      setAirports((prevAirports) =>
        prevAirports.filter((airport) => airport.iataCode !== iataCode)
      );

      console.log(`Successfully deleted airport with IATA code: ${iataCode}`);
    } catch (error) {
      console.error("Error deleting airport:", error);
      alert("Failed to delete airport. Please try again.");
    }
  };

  // Handling the submission of updated airport information
  const handleUpdateSubmit = async (updatedAirport) => {
    try {
      const updated = await updateAirport(updatedAirport);
      setAirports((prevAirports) =>
        prevAirports.map((airport) =>
          airport.iataCode === updated.iataCode ? updated : airport
        )
      );
      setSelectedAirport(null);
    } catch (error) {
      console.error("Error updating airport:", error);
      alert("Failed to update airport. Please try again.");
    }
  };

  return (
    <>
      <button
        onClick={() => setShowAddAirportForm(!showAddAirportForm)}
        style={{ marginBottom: "10px", cursor: "pointer" }}
        className="AddBtn"
      >
        Add Airport
      </button>

      {showAddAirportForm && <AddAirport onSubmit={handleAddAirport} />}

      <div>
        <h3>Airport List</h3>
        {error && <div style={{ color: "red" }}>{error}</div>} {/* Error message display */}
        <ul>
          {airports.map((airport) => (
            <li key={airport.iataCode}>
              <p>{airport.name} ({airport.iataCode}) - {airport.location} </p>
              <button onClick={() => handleDeleteAirport(airport.iataCode)} className="DeleteBtn" >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>


    </>
  );
}

export default AirportsDropdown;
