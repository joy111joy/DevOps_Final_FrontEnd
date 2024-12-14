import React from "react";
import "../index.css";
import Banner from "../components/Banner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginOverlay from "../components/LoginOverlay";

import { images } from "../constants/image";

const Home = () => {

  const [showLoginOverlay, setShowLoginOverlay] = useState(false);
  const navigate = useNavigate(); 
  const handleLoginSuccess = () => {
    console.log("Login successful! Redirecting to admin...");
    navigate("/admin");
  };

  return (
    <div className="homeCont">
      <Banner
        mainMessage="Welcome to MRK Airport "
        subMessage="FInd useful information about your flights, passengers, and more"
        sideBar={true}
      />
      <div className="linkBox">
        <div className="fillBox"></div>

          <Link to={"/flightlist"}
          className="pageLinkBox"
          style={{ backgroundImage: `url(${images.flightLink})` }}> 
            <div className="shadeBox"></div>
            <div className="linkBoxTxt">
                      <h1>Flight List</h1>
                      <h2>View live flight data, etc</h2>
                  </div>
          </Link>


        <Link to={"/airportlist"}
          className="pageLinkBox"
          style={{ backgroundImage: `url(${images.airportLink})` }}>
            <div className="shadeBox"></div>
            <div className="linkBoxTxt">
                  <h1>Airport Guide</h1>
                  <h2>Gate Information, POI, etc</h2>
              </div>
        </Link>

        <div className="fillBox"></div>
      </div>
    </div>
  );
};

export default Home;
