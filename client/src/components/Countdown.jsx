import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] =
    useState <
    TimeLeft >
    {
      days: 8,
      hours: 23,
      minutes: 55,
      seconds: 41,
    };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days = -1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section class="countdown-container">
      <h1>We're Launching Soon</h1>
      <div className="countdown">
        <span className="time-count">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <p className="time-label">Days</p>
      </div>
      <div className="countdown">
        <span className="time-count">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <p className="time-label">Hours</p>
      </div>
      <div className="countdown">
        <span className="time-count">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <p className="time-label">Minutes</p>
      </div>
      <div className="countdown">
        <span className="time-count">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <p className="time-label">Seconds</p>
      </div>
    </section>
  );
}

export default Countdown;
