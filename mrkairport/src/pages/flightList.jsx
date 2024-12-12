import React, { useState, useEffect } from "react";
import { getAllFlights } from "../services/flightService";
import Banner from "../components/Banner";

function FlightList() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterAirport, setFilterAirport] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterFlightNumber, setFilterFlightNumber] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);

  const SubscriptionForm = ({ flightNumber }) => {
    const [subscriptionData, setSubscriptionData] = useState({
      email: "",
      phone: "",
      flightNumber: flightNumber,
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Subscription submitted:", subscriptionData);
    };

    return (
      <div>
        <form onSubmit={handleSubmit} className="subscriptionForm">
          <input
            type="email"
            placeholder="Email"
            value={subscriptionData.email}
            onChange={(e) =>
              setSubscriptionData({
                ...subscriptionData,
                email: e.target.value,
              })
            }
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={subscriptionData.phone}
            onChange={(e) =>
              setSubscriptionData({
                ...subscriptionData,
                phone: e.target.value,
              })
            }
          />
          <button type="submit">Subscribe to Updates</button>
        </form>
      </div>
    );
  };

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const data = await getAllFlights();
        setFlights(data);
      } catch (error) {
        console.error("Error fetching flights:", error);
        setError("Failed to load flights");
      } finally {
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);

  const filteredFlights = flights.filter((flight) => {
    const matchesAirport = filterAirport
      ? flight.airline.toLowerCase().includes(filterAirport.toLowerCase())
      : true;
    const matchesStatus = filterStatus
      ? flight.status.toLowerCase() === filterStatus.toLowerCase()
      : true;
    const matchesFlightNumber = filterFlightNumber
      ? flight.flightNumber
          .toLowerCase()
          .includes(filterFlightNumber.toLowerCase())
      : true;

    return matchesAirport && matchesStatus && matchesFlightNumber;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Banner
        mainMessage={"Flights"}
        subMessage={"Track Live flight information"}
        sideBar={true}
      />
      <div className="flightListCont">
        <h2>Search Flight</h2>
        <div className="filterSection">
          <input
            type="text"
            placeholder="Filter by Airport"
            value={filterAirport}
            onChange={(e) => setFilterAirport(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Flight Number"
            value={filterFlightNumber}
            onChange={(e) => setFilterFlightNumber(e.target.value)}
          />
        </div>
        <div className="columnTitles">
          <div className="ColFlight"></div>
          <div className="ColStatus">
            <p>Status</p>
          </div>
          <div className="ColGate">
            <p>Gate</p>
          </div>
          <div className="ColTerm">
            <p>Terminal</p>
          </div>
          <div className="ColDepart">
            <p>Departure Time</p>
          </div>
          <div className="ColArrival">
            <p>Arrival Time</p>
          </div>
        </div>

        {filteredFlights.map((flight, index) => (
          <div key={index} className="flightItem">
            <button
              onClick={() => {
                setSelectedFlight(flight.flightNumber);
                setShowSubscriptionForm(true);
              }}
              className="subscribeButton"
            >
              Subscribe
            </button>
            {selectedFlight === flight.flightNumber && showSubscriptionForm && (
              <SubscriptionForm flightNumber={flight.flightNumber} />
            )}
            <div className="flightNum">
              <h3>{flight.flightNumber}</h3>
              <p>{flight.airline}</p>
            </div>
            <p className="flightStatus">
              <span
                style={{
                  color:
                    flight.status === "On Time"
                      ? "green"
                      : flight.status === "In-Flight"
                        ? "yellow"
                        : flight.status === "Landed"
                          ? "green"
                          : flight.status === "Delayed"
                            ? "yellow"
                            : flight.status === "Cancelled"
                              ? "red"
                              : "black",
                }}
              >
                {flight.status}
              </span>
            </p>
            <p className="flightGate">{flight.gate}</p>
            <p className="flightTerm">{flight.terminal}</p>
            <p className="flightDepart">
              {new Date(flight.scheduledDepartureTime).toLocaleString()}
            </p>
            <p className="flightArrival">
              {new Date(flight.scheduledArrivalTime).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightList;
