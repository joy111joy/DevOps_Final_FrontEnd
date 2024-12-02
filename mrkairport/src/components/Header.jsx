import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginOverlay from "./LoginOverlay";

function Header() {
  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const navigate = useNavigate(); 
  const handleLoginSuccess = () => {
    console.log("Login successful! Redirecting to admin...");
    navigate("/admin");
  };

  return (
    <>
      <header>
        <div className="topHead">
          <Link to={"/"}>
            <h1>MRK Airport Management</h1>
          </Link>
        </div>
        <div className="botHead">
          <Link to="/flightlist">Flight List</Link>
          <Link to="/">Airport Guide</Link>
          <button
            className="admin-link"
            onClick={() => setShowLoginOverlay(true)}
          >
            <Link>Administration</Link>
          </button>
        </div>
      </header>

      {/* Render the LoginOverlay */}
      <LoginOverlay
        isVisible={showLoginOverlay}
        onClose={() => setShowLoginOverlay(false)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default Header;
