import React, {useState} from "react";
import AddAircraft from "./AddAircraft";
import UpdateAircraft from "./UpdateAircraft";
import {addAircraft,deleteAircraft} from "../../../services/aircraftService";

function AircraftDropdown ({
    aircraft,
    setAircraft,
    handleUpdateClick,
    selectedAircraft,
    handleUpdateSubmit,
    })

    {
  const [showAddAircraftForm, setShowAddAircraftForm] = useState(false);

  const handleAddAircraft = async (aircraftData) => {
    try {
      const newAircraft = await addAircraft(aircraftData);
      setAircraft((prevAircraft) => [...prevAircraft, newAircraft]);
    } catch (error) {
      console.error("Error adding aircraft:", error);
      alert("Failed to add aircraft. Please try again.");
    }
  };

  const handleDelete = async (aircraftId) => {
    try {
      await deleteAircraft(aircraftId);
      setAircraft((prevAircraft) =>
        prevAircraft.filter((aircraft) => aircraft.aircraftId !== aircraftId)
      );
    } catch (error) {
      console.error("Error deleting aircraft:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowAddAircraftForm(!showAddAircraftForm)}
        style={{ marginBottom: "10px", cursor: "pointer" }}
      >
        Add Aircraft
      </button>

      {showAddAircraftForm && <AddAircraft onSubmit={handleAddAircraft} />}

      <div>
        <h3>Aircraft List</h3>
        <ul>
          {aircraft?.map((aircraft) => (
            <li key={aircraft.aircraftId}>
              Aircraft ID: {aircraft.aircraftId} - {aircraft.model}
              <button onClick={() => handleUpdateClick(aircraft)}>Update</button>
              <button onClick={() => handleDelete(aircraft.aircraftId)}>
              Delete
              </button>
             </li>

      ))}
    </ul>
  </div>

      {selectedAircraft && ( <UpdateAircraft
      aircraft={selectedAircraft}
      onSubmit={handleUpdateSubmit}
      onCancel={() => handleUpdateClick(null)}
       />
       )}
    </>
  );
}


export default AircraftDropdown;





