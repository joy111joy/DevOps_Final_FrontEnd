import React, {use State} from "react";
import AddAirport from "./addAirport";
import UpdateAirport from "./updateAirport";
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
        setAirports ((prevAirports) => [...preAirports, newAirport]);
        }catch (error) {
            console.error ("Error adding airport:", error);
            alert ("Failed to add airport.  Please try again.");
            }
        };

    const handleDelete = async (airportCode) => {
    try{
        await deleteAirport(airportCode);
        setAirports((preAirports)=>
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
       onClick={()=> set ShowAddAirportForm (!showAddAirportForm)}
       style={{ marginBottom: "10px", cursor: "pointer" }}
       >
       Add Aiport
       </button>

       {showAddAirportForm && <AddAirport onSubmit={handleAddAirport}/>}

       <div>
           <h3> Airport List </h3>
            <ul>
            {airports.map ((airport) => (
             <il key={airport.airportCode}>
                Airport Code : {airport.airportCode) - {airport.name}
                <button onClick={90 => handleUpdateClick(airport)}>Update<?button>
                <button onClick = {() => handleDelete (airport.airportCode)}>
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



