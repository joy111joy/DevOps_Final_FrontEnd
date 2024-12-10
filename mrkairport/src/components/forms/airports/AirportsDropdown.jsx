import React, { useState, useEffect } from "react";
import AddAirport from "./AddAirport";
import UpdateAirport from "./UpdateAirport";
import { addAirport, deleteAirport, updateAirport, getAllAirports } from "../../../services/airportService";

function AirportsDropdown() {
  const [showAddAirportForm, setShowAddAirportForm] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [airports, setAirports] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAllAirports();
        console.log("Fetched airports:", data); 
        setAirports(data); 
      } catch (err) {
        console.error("Error fetching airports:", err);
        setError('Failed to load airports. Please try again.');
      }
    };

    fetchAirports();
  }, []);

  const handleAddAirport = async (airportData) => {
    try {
      const newAirport = await addAirport(airportData);
      setAirports((prevAirports) => [...prevAirports, newAirport]);
    } catch (error) {
      console.error("Error adding airport:", error);
      alert("Failed to add airport. Please try again.");
    }
  };

  const handleDeleteAirport = async (iataCode) => {
    try {
      console.log(`Sending DELETE request for airport: ${iataCode}`);
      await deleteAirport(iataCode); 

      setAirports((prevAirports) =>
        prevAirports.filter((airport) => airport.iataCode !== iataCode)
      );

      console.log(`Successfully deleted airport with IATA code: ${iataCode}`);
    } catch (error) {
      console.error("Error deleting airport:", error);
      alert("Failed to delete airport. Please try again.");
    }
  };

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

      <div>
        <h3>Airport List</h3>
        {error && <div style={{ color: "red" }}>{error}</div>}
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

      <button
        onClick={() => setShowAddAirportForm(!showAddAirportForm)}
        style={{ marginBottom: "10px", cursor: "pointer" }}
        className="AddBtn"
      >
        Add Airport
      </button>

      {showAddAirportForm && <AddAirport onSubmit={handleAddAirport} />}


    </>
  );
}

export default AirportsDropdown;
