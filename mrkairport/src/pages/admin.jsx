import React, { useState } from 'react';
import Banner from '../components/Banner';

function Admin() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
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
            <p>Add Flight</p>
            <p>View Flights</p>
            <p>Update Flight</p>
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
            <p>Add Aircraft</p>
            <p>View Aircraft</p>
            <p>Update Aircraft</p>
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
            <p>Add Airport</p>
            <p>View Airports</p>
            <p>Update Airport</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
