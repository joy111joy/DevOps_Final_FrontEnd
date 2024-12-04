import React from "react";

function AirportsDropdown() {
  return (
    <div>
      <button
        onClick={() => console.log("Show Add Airport Form")}
        style={{ marginBottom: "10px", cursor: "pointer" }}
      >
        Add Airport
      </button>
    </div>
  );
}

export default AirportsDropdown;
