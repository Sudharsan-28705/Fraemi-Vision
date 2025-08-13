"use client";

import React, { useEffect, useState } from "react";

export default function CountingNumberAnimation() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetNumber = 100;
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = targetNumber / totalFrames;

    let currentNumber = 0;
    const counter = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        clearInterval(counter);
        setCount(targetNumber);
      } else {
        setCount(Math.ceil(currentNumber));
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="text-center text-[1.5rem] font-extralight ">
        We have worked with the companies{" "}
        <span className="font-semibold text-gray-700">{count}</span>+
      </div>
    </div>
  );
}
