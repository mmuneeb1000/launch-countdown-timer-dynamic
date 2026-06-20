import { useState } from "react";
import { useEffect } from "react";

function Countdown() {
  return (
    <section>
      <h1>We're Launching Soon</h1>
      <div className="countdown">
        <span className="days-count"></span>
        <p>Days</p>
      </div>
      <div className="countdown">
        <span className="hours-count"></span>
        <p>Hours</p>
      </div>
      <div className="countdown">
        <span className="minutes-count"></span>
        <p>Minutes</p>
      </div>
      <div className="countdown">
        <span className="seconds-count"></span>
        <p>Seconds</p>
      </div>
    </section>
  );
}

export default Countdown;
