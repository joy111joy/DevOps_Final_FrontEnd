import React, {useState} from "react";
import AddAirport from "./AddAirport";
import UpdateAirport from "./UpdateAirport";
import {addAirport, deleteAirport} from "../../../services/airportService";

function AirportsDropdown({
    airports,
    setAirports,
    handleUpdateClick,
    selectedAirport,
    handleUpdateSubmit,
    }){
    const [showAddAirportForm, setShowAddAirportForm] = useState(false);

    const handleAddAirport = async (airportData) => {
    try {
        const newAirport = await addAirport(airportData);
        setAirports ((prevAirports) => [...prevAirports, newAirport]);
        }catch (error) {
            console.error ("Error adding airport:", error);
            alert ("Failed to add airport.  Please try again.");
            }
        };

    const handleDelete = async (airportCode) => {
    try{
        await deleteAirport(airportCode);
        setAirports((prevAirports)=>
         prevAirports.filter((airport)=> airport.airportCode !== airportCode)
        );
        } catch (error) {
            console.error ("error deleting airport:", error);
            alert ("Failed to delete airport.  Please try again.");
            }
        };

   return (
       <>
       <button
       onClick={()=> setShowAddAirportForm (!showAddAirportForm)}
       style={{ marginBottom: "10px", cursor: "pointer" }}
       >
       Add Aiport
       </button>

       {showAddAirportForm && <AddAirport onSubmit={handleAddAirport}/>}

       <div>
           <h3> Airport List </h3>
            <ul>
            {airports.map ((airport) => (
             <li key={airport.airportCode}>
                Airport Code : {airport.airportCode} - {airport.name}
                <button onClick={() => handleUpdateClick(airport)}>Update</button>
                <button onClick={() => handleDelete(airport.airportCode)}>
                Delete
                </button>
                </li>
            ))}
    </ul>
    </div>

    {selectedAirport && ( <UpdateAirport
        airport = {selectedAirport}
        onSubmit={handleUpdateSubmit}
        onCancel = {() => handleUpdateClick (null)}
        />
        )}
    </>
    );
}

export default AirportsDropdown;


  //      onClick={() => console.log("Show Add Airport Form")}



