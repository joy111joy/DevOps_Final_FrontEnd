import React from "react";

function Dropdown({ title, isOpen, toggleDropdown, children }) {
  return (
    <div
      className="adminOption"
      style={{
        border: "1px solid black",
      }}
    >
      <button className="adminOptionButton"
        onClick={toggleDropdown}>
        <p className="adminButTxt">{title}</p>
      </button>

      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#f0f0f0",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
