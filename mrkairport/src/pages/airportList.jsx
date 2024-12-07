import React, { useState, useEffect } from "react";
import {
  getAllAirports,
  getAirportDetails,
  getDeparturesByAirport,
  getArrivalsByAirport,
} from "../services/airportService"; // Import API functions
import Banner from "../components/Banner";

function AirportList() {
  const [airports, setAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [arrivals, setArrivals] = useState([]);
  const [departures, setDepartures] = useState([]);


  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAllAirports();
        setAirports(data);
      } catch (error) {
        console.error("Error fetching airports:", error);
        setError("Failed to load airports");
      }
    };

    fetchAirports();
  }, []);

  const handleAirportClick = async (iataCode) => {
    console.log('Selected Airport:', selectedAirport);

    setLoading(true);
    setError(null);

    try {
      // Fetch airport details
      const airportDetails = await getAirportDetails(iataCode);

      // Fetch arrivals and departures
      const arrivalsData = await getArrivalsByAirport(iataCode);
      const departuresData = await getDeparturesByAirport(iataCode);

      // Update state
      setSelectedAirport({ ...airportDetails });
      setArrivals(arrivalsData);
      setDepartures(departuresData);
    } catch (error) {
      console.error("Error fetching airport data:", error);
      setError("Failed to load airport details");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Banner
        mainMessage={"Airports"}
        subMessage={"Explore airport information"}
        sideBar={true}
      />
      <div className="airportList">
        <h3>Available Airports</h3>
        {airports.map((airport) => (
          <button
            key={airport.iataCode}
            onClick={() => handleAirportClick(airport.iataCode)}
            className="airportButton"
          >
            {airport.name} ({airport.iataCode})
          </button>
        ))}
      </div>

      {loading && <div>Loading airport details...</div>}

      {selectedAirport && (
        <div className="airportDetails">
          <h2>{selectedAirport.name} ({selectedAirport.iataCode})</h2>
          <p>Location: {selectedAirport.city}, {selectedAirport.country}</p>


          <h3>Departures</h3>
          <div className="flightList">
            {departures.map((flight) => (
              <div key={flight.flightNumber} className="flightItem">
                <p>{flight.flightNumber} - {flight.airline}</p>
                <p>Status: {flight.status}</p>
                <p>Departure: {new Date(flight.scheduledDepartureTime).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <h3>Arrivals</h3>
          <div className="flightList">
            {arrivals.map((flight) => (
              <div key={flight.flightNumber} className="flightItem">
                <p>{flight.flightNumber} - {flight.airline}</p>
                <p>Status: {flight.status}</p>
                <p>Arrival: {new Date(flight.scheduledArrivalTime).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AirportList;
