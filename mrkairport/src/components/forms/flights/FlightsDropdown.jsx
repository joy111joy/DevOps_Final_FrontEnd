import React, { useState, useEffect } from "react";
import AddFlight from "./addFlight";
import UpdateFlight from "./updateFlight";
import { sendNotification } from "../../../services/notificationService";
import { subscribeToFlightUpdates } from "../../../services/notificationService";

import {
  addFlight,
  deleteFlight,
  setArrival,
  setDeparture,
} from "../../../services/flightService";

function FlightsDropdown({
  flights,
  setFlights,
  handleUpdateClick,
  selectedFlight,
  handleUpdateSubmit,
}) {
  const [showAddFlightForm, setShowAddFlightForm] = useState(false);
  const [newFlightNumber, setNewFlightNumber] = useState(null);
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  useEffect(() => {
    if (newFlightNumber) {
      sendNotification({
        flightNumber: newFlightNumber,
        message: `New flight ${newFlightNumber} has been added`,
        type: "email",
      });
    }
  }, [newFlightNumber]);

  const handleAddFlight = async (flightData) => {
    try {
      const newFlight = await addFlight(flightData);
      setFlights((prevFlights) => [...prevFlights, newFlight]);
      setNewFlightNumber(newFlight.flightNumber);
      setShowSubscriptionForm(true);
    } catch (error) {
      console.error("Error adding flight or setting departure/arrival:", error);
      alert("Failed to add flight or set departure/arrival. Please try again.");
    }
  };

  const SubscriptionForm = ({ flightNumber, onClose }) => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await subscribeToFlightUpdates({
          flightNumber,
          email: e.target.email.value,
          phone: e.target.phone.value,
        });
        onClose();
      } catch (error) {
        console.error("Error subscribing:", error);
        alert("Failed to subscribe to updates");
      }
    };

    const MyComponent = () => {
      const handleSubscribe = async () => {
        setIsSubscribing(true);
        try {
          const subscriptionData = {
            flightNumber: newFlightNumber,
            email: "",
            phone: "",
          };

          await subscribeToFlightUpdates(subscriptionData);
        } catch (error) {
          // Handle error
        } finally {
          setIsSubscribing(false);
        }
      };

      const handleSubscriptionClose = () => {
        setShowSubscriptionForm(false);
        setNewFlightNumber(null); // Reset the flight number as well
      };
      return (
        <>
          <button onClick={handleSubscribe}>Subscribe</button>
          <button onClick={handleSubscriptionClose}>Close</button>

          <div className="subscription-popup">
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone Number" />
              <button type="submit">Subscribe</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </form>
          </div>
        </>
      );
    };

    const handleDelete = async (flightNumber) => {
      try {
        await deleteFlight(flightNumber);
        setFlights((prevFlights) =>
          prevFlights.filter((flight) => flight.flightNumber !== flightNumber)
        );
      } catch (error) {
        console.error("Error deleting flight:", error);
        alert("Failed to delete flight. Please try again.");
      }
    };

    return (
      <>
        <div>
          <h3>Flight List</h3>
          <ul>
            {flights.map((flight) => (
              <li key={flight.flightNumber}>
                <p>
                  Flight Number: {flight.flightNumber} - {flight.airline} |
                  Status: {flight.status}
                </p>
                <button
                  onClick={() => handleUpdateClick(flight)}
                  className="UpdateBtn"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(flight.flightNumber)}
                  className="DeleteBtn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selectedFlight && (
          <UpdateFlight
            flight={selectedFlight}
            onSubmit={handleUpdateSubmit}
            onCancel={() => handleUpdateClick(null)}
          />
        )}
        <button
          onClick={() => setShowAddFlightForm(!showAddFlightForm)}
          className="AddBtn"
        >
          Add Flight
        </button>
        {showAddFlightForm && <AddFlight onSubmit={handleAddFlight} />}
        {showSubscriptionForm && newFlightNumber && (
          <SubscriptionForm
            flightNumber={newFlightNumber}
            onClose={() => setShowSubscriptionForm(false)}
          />
        )}
      </>
    );
  };
}

export default FlightsDropdown;
