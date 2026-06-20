import React from "react";
import { useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 9,
  });
  const [flip, setFlip] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        const updatedFlip = {
          days: false,
          hours: false,
          minutes: false,
          seconds: false,
        };

        if (seconds > 0) {
          seconds -= 1;
          updatedFlip.seconds = true;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
          updatedFlip.minutes = true;
          updatedFlip.seconds = true;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
          updatedFlip.hours = true;
          updatedFlip.minutes = true;
          updatedFlip.seconds = true;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
          updatedFlip.days = true;
          updatedFlip.hours = true;
          updatedFlip.minutes = true;
          updatedFlip.seconds = true;
        } else {
          clearInterval(timer);
        }
        setFlip(updatedFlip);
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (flip.days || flip.hours || flip.minutes || flip.seconds) {
      const t = setTimeout(() => {
        setFlip({
          days: false,
          hours: false,
          minutes: false,
          seconds: false,
        });
      }, 800);

      return () => clearTimeout(t);
    }
  }, [flip]);

  return (
    <section className="wrapper">
      <h1>We're Launching Soon</h1>
      <div className="countdown-container">
        <div className="card-container">
          <div className={`card ${flip.days ? "flip" : ""}`}>
            <div className="face front">
              <span>{String(timeLeft.days).padStart(2, "0")}</span>
              <div className="divider"></div>
            </div>

            <div className="face back">
              <span>{String(timeLeft.days).padStart(2, "0")}</span>
              <div className="divider"></div>
            </div>
          </div>

          <p>Days</p>
        </div>

        <div className="card-container">
          <div className={`card ${flip.hours ? "flip" : ""}`}>
            <div className="face front">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <div className="divider"></div>
            </div>

            <div className="face back">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <div className="divider"></div>
            </div>
          </div>

          <p>Hours</p>
        </div>

        <div className="card-container">
          <div className={`card ${flip.minutes ? "flip" : ""}`}>
            <div className="face front">
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <div className="divider"></div>
            </div>

            <div className="face back">
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <div className="divider"></div>
            </div>
          </div>

          <p>Minutes</p>
        </div>

        <div className="card-container">
          <div className={`card ${flip.seconds ? "flip" : ""}`}>
            <div className="face front">
              <div className="divider"></div>
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>

            <div className="face back">
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </div>
          <p>Seconds</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
