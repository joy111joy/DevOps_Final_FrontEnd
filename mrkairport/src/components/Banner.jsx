import React, { useState, useEffect } from 'react';
import { images } from '../constants/image'; 
import { icons } from '../constants/icons'; 


function Banner({ mainMessage, subMessage, sideBar }) {
  const [currentTime, setCurrentTime] = useState('');

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
    <div
      className="banner"
    //   style={{ backgroundImage: `url(${images.fullBack})` }}
    >
      <div className="mainBar">
        <div className="mainMess"><h1>{mainMessage}</h1></div>
        <div className="subMess">{subMessage}</div>
      </div>
      {sideBar && (
        <div className="sideBar">
          <div className="time">
            <img src={icons.clock} alt="clock" />
            <h1>{currentTime}</h1></div>
          <div>
            <h1>No current Alerts</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
