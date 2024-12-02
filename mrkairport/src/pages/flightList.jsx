import React, { useState, useEffect } from 'react';
import { getAllFlights } from '../services/flightService';  // Assuming you have this API function
import Banner from '../components/Banner';

function FlightList() {
  const [flights, setFlights] = useState([]);  // State to store fetched flights
  const [loading, setLoading] = useState(true);  // Loading state for UI feedback
  const [error, setError] = useState(null);  // Error state for handling failures

  useEffect(() => {
    // Fetch all flights when the component loads
    const fetchFlights = async () => {
      try {
        const data = await getAllFlights();
        setFlights(data);  // Update the flights state with fetched data
      } catch (error) {
        console.error("Error fetching flights:", error);
        setError("Failed to load flights");  // Set error message
      } finally {
        setLoading(false);  // Set loading to false after fetching
      }
    };

    fetchFlights();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Display loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>;  // Display error message if fetching fails
  }

  return (
    <div>
      <Banner mainMessage={'Flights'} subMessage={'Track Live flight information'} sideBar={true} />
      <div className='flightListCont'>
      <div className='columnTitles'>
        <div className='ColFlight'>
        </div>
        <div className='ColStatus'>
        <p>Status</p>
        </div>
        <div className='ColGate'>
        <p>Gate</p>
        </div>
        <div className='ColTerm'>
        <p>Terminal</p>
        </div>
        <div className='ColDepart'>
        <p>Departure Time</p>
        </div>
        <div className='ColArrival'>
        <p>Arrival Time</p>
        </div>
      </div>

        {flights.map((flight, index) => (
          <div key={index} className="flightItem">
            <div className='flightNum'>
              <h3>{flight.flightNumber}</h3>
              <p>{flight.airline}</p>
            </div>


            <p className='flightStatus'>
                <span style={{ color: flight.status === 'On Time' ? 'green' : 'red' }}>
                {flight.status}
                </span>
                </p>
            <p className='flightGate'>{flight.gate}</p>
            <p className='flightTerm'>{flight.terminal}</p>
            <p className='flightDepart'>{new Date(flight.scheduledDepartureTime).toLocaleString()}</p>
            <p className='flightArrival'>{new Date(flight.scheduledArrivalTime).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightList;
