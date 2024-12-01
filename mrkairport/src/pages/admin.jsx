import React, { useState } from 'react';
import Banner from '../components/Banner';
import AddFlight from '../components/forms/flights/addFlight';

function Admin() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showAddFlightForm, setShowAddFlightForm] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleAddFlightForm = () => {
    setShowAddFlightForm(!showAddFlightForm);
  };

  const handleAddFlight = (flightData) => {
    console.log('Flight added:', flightData);
  };

  return (
    <div>
      <Banner mainMessage="MRK Airport Management" subMessage="Administration" sideBar={false} />

      {/* Flights */}
      <div
        className="adminOption"
        style={{ margin: '20px', border: '1px solid black', padding: '10px', borderRadius: '10px' }}
      >
        <button
          onClick={() => toggleDropdown(0)}
          style={{
            width: '100%',
            padding: '10px',
            textAlign: 'left',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Flights
        </button>

        {openDropdown === 0 && (
          <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
            <button
              onClick={toggleAddFlightForm}
              style={{ marginBottom: '10px', cursor: 'pointer' }}
            >
              Add Flight
            </button>

            {/* Show the form to add a flight */}
            {showAddFlightForm && <AddFlight onSubmit={handleAddFlight} />}
          </div>
        )}
      </div>

      {/* Aircraft */}
      <div
        className="adminOption"
        style={{ margin: '20px', border: '1px solid black', padding: '10px', borderRadius: '10px' }}
      >
        <button
          onClick={() => toggleDropdown(1)}
          style={{
            width: '100%',
            padding: '10px',
            textAlign: 'left',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Aircraft
        </button>
        {openDropdown === 1 && (
          <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
            <button
              onClick={() => console.log('Show Add Aircraft Form')}
              style={{ marginBottom: '10px', cursor: 'pointer' }}
            >
              Add Aircraft
            </button>
          </div>
        )}
      </div>

      {/* Airports */}
      <div
        className="adminOption"
        style={{ margin: '20px', border: '1px solid black', padding: '10px', borderRadius: '10px' }}
      >
        <button
          onClick={() => toggleDropdown(2)}
          style={{
            width: '100%',
            padding: '10px',
            textAlign: 'left',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Airports
        </button>
        {openDropdown === 2 && (
          <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
            <button
              onClick={() => console.log('Show Add Airport Form')}
              style={{ marginBottom: '10px', cursor: 'pointer' }}
            >
              Add Airport
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
