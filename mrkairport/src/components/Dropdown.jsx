import React from "react";

function Dropdown({ title, isOpen, toggleDropdown, children }) {
  return (
    <div
      className="adminOption"
      style={{
        margin: "20px",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <button
        onClick={toggleDropdown}
        style={{
          width: "100%",
          padding: "10px",
          textAlign: "left",
          background: "none",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
