import React, { useState, useEffect } from "react";
import AddAircraft from "./AddAircraft";
import UpdateAircraft from "./UpdateAircraft";
import {
  addAircraft,
  deleteAircraft,
  updateAircraft,
  getAllAircraft
} from "../../../services/aircraftService";

function AircraftDropdown() {
  const [showAddAircraftForm, setShowAddAircraftForm] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const [aircraftList, setAircraftList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAircraft = async () => {
      try {
        const data = await getAllAircraft();
        setAircraftList(data);
      } catch (err) {
        console.error("Error fetching aircraft:", err);
        setError("Failed to load aircraft. Please try again.");
      }
    };

    fetchAircraft();
  }, []);

  const handleAddAircraft = async (aircraftData) => {
    try {
      const newAircraft = await addAircraft(aircraftData);
      setAircraftList((prevAircraft) => [...prevAircraft, newAircraft]);
    } catch (error) {
      console.error("Error adding aircraft:", error);
      alert("Failed to add aircraft. Please try again.");
    }
  };

  const handleDeleteAircraft = async (id) => {
    try {
      await deleteAircraft(id);
      setAircraftList((prevAircraft) =>
        prevAircraft.filter((aircraft) => aircraft.id !== id)
      );
    } catch (error) {
      console.error("Error deleting aircraft:", error);
      alert("Failed to delete aircraft. Please try again.");
    }
  };

  const handleUpdateClick = (aircraft) => {
    setSelectedAircraft(aircraft);
  };

  const handleUpdateSubmit = async (updatedAircraft) => {
    try {
      const updated = await updateAircraft(updatedAircraft);
      setAircraftList((prevAircraft) =>
        prevAircraft.map((aircraft) =>
          aircraft.id === updated.id ? updated : aircraft
        )
      );
      setSelectedAircraft(null);
    } catch (error) {
      console.error("Error updating aircraft:", error);
      alert("Failed to update aircraft. Please try again.");
    }
  };

  return (
    <>
      <div>
        <h3>Aircraft List</h3>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <ul>
          {aircraftList.map((aircraft) => (
            <li key={aircraft.id}>
              <p>
                {aircraft.model} ({aircraft.manufacturer}) - Capacity:{" "}
                {aircraft.capacity} - Range: {aircraft.flightRange} km
              </p>
              <button onClick={() => handleUpdateClick(aircraft)} className="UpdateBtn">Update</button>
              <button onClick={() => handleDeleteAircraft(aircraft.id)} className="DeleteBtn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedAircraft && (
        <UpdateAircraft
          aircraft={selectedAircraft}
          onSubmit={handleUpdateSubmit}
          onCancel={() => setSelectedAircraft(null)}
        />
      )}

      <button
        onClick={() => setShowAddAircraftForm(!showAddAircraftForm)}
        className="AddBtn"
      >
        Add Aircraft
      </button>

      {showAddAircraftForm && <AddAircraft onSubmit={handleAddAircraft} />}
    </>
  );
}

export default AircraftDropdown;
