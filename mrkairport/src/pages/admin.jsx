import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import FlightsDropdown from "../components/forms/flights/FlightsDropdown";
import AircraftDropdown from "../components/forms/aircrafts/AircraftDropdown";
import AirportsDropdown from "../components/forms/airports/AirportsDropdown";
import { getAllFlights } from "../services/flightService";
import { updateFlight } from "../services/flightService";
import { sendNotification } from "../services/notificationService";

function Admin() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const fetchFlights = async () => {
    try {
      const allFlights = await getAllFlights();
      setFlights(allFlights);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleUpdateClick = (flight) => {
    setSelectedFlight(flight);
  };

  const handleUpdateSubmit = async (updatedFlightData) => {
    try {
      await updateFlight(updatedFlightData.flightNumber, updatedFlightData);
      await sendNotification({
        flightNumber: updatedFlightData.flightNumber,
        message: `Flight ${updatedFlightData.flightNumber} has been updated. New status: ${updatedFlightData.status}`,
        type: "email",
      });

      setFlights((prevFlights) =>
        prevFlights.map((flight) =>
          flight.flightNumber === updatedFlightData.flightNumber
            ? updatedFlightData
            : flight
        )
      );

      setSelectedFlight(null);
    } catch (error) {
      console.error("Error updating flight:", error);
    }
  };

  return (
    <div className="Drop">
      <Banner
        mainMessage="Administration"
        subMessage="Select an option to manage data"
        sideBar={false}
      />

      <Dropdown
        title="Flights"
        isOpen={openDropdown === 0}
        toggleDropdown={() => toggleDropdown(0)}
      >
        <FlightsDropdown
          flights={flights}
          setFlights={setFlights}
          handleUpdateClick={handleUpdateClick}
          selectedFlight={selectedFlight}
          handleUpdateSubmit={handleUpdateSubmit}
        />
      </Dropdown>

      <Dropdown
        title="Aircraft"
        isOpen={openDropdown === 1}
        toggleDropdown={() => toggleDropdown(1)}
      >
        <AircraftDropdown />
      </Dropdown>

      <Dropdown
        title="Airports"
        isOpen={openDropdown === 2}
        toggleDropdown={() => toggleDropdown(2)}
      >
        <AirportsDropdown />
      </Dropdown>
    </div>
  );
}

export default Admin;
