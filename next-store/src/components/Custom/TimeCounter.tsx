"use client"
import { useState, useEffect } from "react";

export default function CountDown({ targetDate }:any) {
  const [countdownValues, setCountdownValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setCountdownValues({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });

      // if (distance < 0) {
      //   clearInterval(intervalId);
      //   if (onEnd) {
      //     onEnd(); // Call the callback function when the countdown ends
      //   }
      // }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]); // Include targetDate and onEnd in dependency array

  return (
    <div>
      <div id="countdown">
        <ul className="flex gap-1 ">
          <li className="dark:bg-neutral-800 border bg-neutral-100 p-2 rounded">
            {countdownValues.days}
          </li>
          <li className="dark:bg-neutral-800 border bg-neutral-100 p-2 rounded">
            {countdownValues.hours.toString().padStart(2, "0")}
          </li>
          <li className="dark:bg-neutral-800 border bg-neutral-100 p-2 rounded">
            {countdownValues.minutes.toString().padStart(2, "0")}
          </li>
          <li className="dark:bg-neutral-800 border bg-neutral-100 p-2 rounded">
            {countdownValues.seconds.toString().padStart(2, "0")}
          </li>
        </ul>
      </div>
    </div>
  );
}
