import React {useState} from "react";
import

function AircraftDropdown() {
  return (
    <div>
      <button
        onClick={() => console.log("Show Add Aircraft Form")}
        style={{ marginBottom: "10px", cursor: "pointer" }}
      >
        Add Aircraft
      </button>
    </div>
  );
}

export default AircraftDropdown;