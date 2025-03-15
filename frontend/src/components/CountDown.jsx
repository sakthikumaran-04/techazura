import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-04-03T04:30:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full justify-around items-center mt-10 bg-blue-500 rounded-md text-white py-3">
      <div className="flex flex-col items-center">
        <span>{timeLeft.days}</span>
        <span>Days</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.hours}</span>
        <span>Hours</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.minutes}</span>
        <span>Minutes</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
