"use client";
import Image from "next/image";
import CountDown from "@/components/CountDown";
import { useEffect, useRef, useState } from "react";
import specialOffer from "../public/SVG/special_offer.svg";

export default function Home() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  // Creating an interval in-which time wil be updating
  let interval = useRef();

  // Starting or calling the timer
  const startTimer = () => {
    const countDownDate = new Date("December, 01, 2023 00:00:00").getTime();

    // Setting up an interval to update the countdown every second
    interval = setInterval(() => {
      // Getting the current date and time
      const currentDate = new Date().getTime();

      // Calculating the remaining time until the target date and time
      const remaining_date_and_time = countDownDate - currentDate;

      // Calculating days, hours, minutes, and seconds from the remaining time
      const count_down_days = Math.floor(
        remaining_date_and_time / (1000 * 60 * 60 * 24)
      );
      const count_down_hours = Math.floor(
        (remaining_date_and_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const count_down_minutes = Math.floor(
        (remaining_date_and_time % (1000 * 60 * 60)) / (1000 * 60)
      );
      const count_down_seconds = Math.floor(
        (remaining_date_and_time % (1000 * 60)) / 1000
      );

      // Checking if the countdown has reached zero or gone negative

      if (remaining_date_and_time < 0) {
        // If the countdown is complete, stop the timer
        clearInterval(interval.current);
      } else {
        // If the countdown is ongoing, update the display with the remaining time
        setDays(count_down_days);
        setHours(count_down_hours);
        setMinutes(count_down_minutes);
        setSeconds(count_down_seconds);
      }
    }, 1000); // Update the countdown every 1000 milliseconds (1 second)
  };

  useEffect(() => {
    startTimer();
    return () => {
      // This code cleans up the timer when the component is about to unmount.
      clearInterval(interval.current);
    };
  }, []);
  return (
    <main className='flex flex-col min-h-screen items-center px-8 justify-center gap-16 text-2xl'>
      <Image
        src={specialOffer}
        alt=''
        className='w-2/4 lg:h-56'
        width={200}
        height={200}
      />

      <CountDown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </main>
  );
}
