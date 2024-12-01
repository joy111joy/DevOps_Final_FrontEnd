import React from "react";
import '../index.css';
import Banner from '../components/Banner';

import { images } from '../constants/image';

const Home = () => {
  return (
    <div className="homeCont">
      <Banner mainMessage="Welcome to MRK Airport " subMessage="FInd useful information about your flights, passengers, and more" sideBar={true}/>
        <div className="linkBox">
            <div className="fillBox"></div>
            <div className="flightLink" style={{backgroundImage: `url(${images.flightLink})`}}>
                <div className="shadeBox"></div>
                {/* <div className="linkBoxTxt">
                    <h1>Flight List</h1>
                    <h2>Check-In, Passenger Data, & more</h2>
                </div> */}
            </div>
            <div className="airportLink" style={{backgroundImage: `url(${images.airportLink})`}}>
            <div className="shadeBox"></div>
            {/* <div className="linkBoxTxt">
                <h1>Airport Guide</h1>
                <h2>Gate Information, POI, & more</h2>
            </div> */}
            </div>
            <div className="adminLink"style={{backgroundImage: `url(${images.adminLink})`}}>
            <div className="shadeBox"></div>
            {/* <div className="linkBoxTxt">
                <h1>Administration</h1>
                <h2>Manage Flights, Gates, & more</h2>
            </div> */}
            </div>
            <div className="fillBox"></div>
        </div>
    </div>
  );
};

export default Home;
