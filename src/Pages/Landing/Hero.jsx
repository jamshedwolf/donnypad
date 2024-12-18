import React, { useState, useEffect } from "react";
import leftbee from "../../assets/leftbee.svg";
import rightbee from "../../assets/rightbee.svg";

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 95,
    hours: 23,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds =
          prevTime.days * 86400 +
          prevTime.hours * 3600 +
          prevTime.minutes * 60 +
          prevTime.seconds;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return prevTime;
        }

        const secondsLeft = totalSeconds - 1;
        const days = Math.floor(secondsLeft / 86400);
        const hours = Math.floor((secondsLeft % 86400) / 3600);
        const minutes = Math.floor((secondsLeft % 3600) / 60);
        const seconds = secondsLeft % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="text-white relative h-screen bgg gap-3 flex items-center justify-center flex-col lg:gap-5">
      <div className="absolute w-full h-full top-0 bg-black/70"></div>
      <p className="lg:text-4xl text-2xl bg-transparent tracking-wider font-medium z-[10]">
        Welcome To The
      </p>
      <p className="lg:text-7xl text-4xl text-center bg-transparent z-[10] font-bold">
        HiveMind Ecosystem
      </p>
      <p className="text-center bg-transparent lg:text-[24px] tracking-wide z-[10] text-[20px] p-2 lg:p-0">
        Join the Swarm Army. Build, stake, and farm your <br />
        way to dominance.
      </p>
      <button className="px-4 lg:px-10 py-2 lg:text-[20px] flex items-center border-2 border-white z-[1] rounded-full btn font-bold hover:scale-125 transition-transform duration-300 ease-in-out text-white justify-center">
        Learn More
      </button>

      <div className="flex items-center absolute -bottom-20 justify-center w-full">
        <div className="flex flex-col gap-5 lg:flex-row relative items-center rounded-2xl bg-[#E39008] z-[1] p-8 lg:py-12 lg:w-[80%] justify-between">
          <p className="text-4xl lg:text-6xl font-bold">Coming Soon</p>
          <p className="text-2xl lg:text-5xl animate-time-change">
            {`${timeLeft.days}D : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
          </p>
          <button className="px-4 lg:px-10 py-2 lg:text-[20px] flex items-center border-2 border-white z-[1] rounded-full bg-transparent font-bold text-white justify-center">
            Stake $HONEY
          </button>
          <img
            src={leftbee}
            alt=""
            className="absolute hover:scale-90 transition-transform duration-300 ease-in-out hidden lg:block lg:top-[-270px] lg:left-[20%]"
          />
          <img
            src={rightbee}
            alt=""
            className="absolute hover:scale-90 transition-transform duration-300 ease-in-out hidden lg:block lg:top-[-270px] lg:right-[20%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;