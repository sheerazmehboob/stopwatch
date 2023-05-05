import React, { useEffect, useState } from 'react'
import './stopwatch.css'

function Stopwatch() {

      const [time, setTime] = useState(0);
    
      const [isRunning, setIsRunning] = useState(false);
    
      useEffect(() => {
        let intervalId;
        if (isRunning) {
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);
    
      const hours = Math.floor(time / 360000);
      const minutes = Math.floor((time % 360000) / 6000);
      const seconds = Math.floor((time % 6000) / 100);
      const milliseconds = time % 100;
    
      const startAndStop = () => {
        setIsRunning(!isRunning);
      };
    
      const reset = () => {
        setTime(0);
      };
      return (
        <div className="Main">
          <div className="header">
              <h1 className='Title'>StopWatch</h1>
          </div>
          <div className="timeContainer">
              <p>{hours} </p>
              <p>{minutes.toString().padStart(2, "0")}</p>
              <p>{seconds.toString().padStart(2, "0")}</p>
              <p>{milliseconds.toString().padStart(2, "0")}</p>
          </div>
          <div className="btnContianer">
              <button className="btnStart btn" onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
              <button className="btnReset btn" onClick={reset}>Reset</button>
          </div>
        </div>
      );
}

export default Stopwatch;
