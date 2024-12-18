import React, { useState, useEffect } from "react";
import { images } from "../constants/image";
import { icons } from "../constants/icons";

function Banner({ mainMessage, subMessage, sideBar }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="mainBar">
        <div className="mainMess">
          <h1 data-test-id="time-display">{mainMessage}</h1>
        </div>
        <div className="subMess">{subMessage}</div>
      </div>
      {sideBar && (
        <div className="sideBar">
          <div className="time">
            <img src={icons.clock} alt="clock" />
            <h1 data-testid="time-displaying">{currentTime}</h1>
          </div>
          <div>
            <h1> No current Alerts</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
