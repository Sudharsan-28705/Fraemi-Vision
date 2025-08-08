"use client";

import React, { useEffect, useRef } from "react";

export default function ScrollingLogoMarquee() {
  // Refs for the cursor and its child circle
  const cursorRef = useRef<HTMLDivElement>(null);
  const recCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const recCircle = recCircleRef.current;

    if (!cursor || !recCircle) return;

    // Move cursor with mousemove
    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Scale cursor and add class on mousedown
    const onMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.7)";
      recCircle.classList.add("clicked");
    };

    // Revert scale and remove class on mouseup
    const onMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      recCircle.classList.remove("clicked");
    };

    // Attach event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} className="custom-cursor">
        <div className="rec-circle" ref={recCircleRef}></div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          <ul className="marquee-content">
            <li>
              <img src="/LOGO_ASSESTS/IAOI_LOGO.png" alt="IAOI Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/SPECTRUM_LOGO (1).png" alt="Spectrum Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/MM_KITCHEN_LOGO.png" alt="MM Kitchen Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/IMPLANTREE_LOGO.png" alt="Implantree Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/MAHALASHMI_LOGO.png" alt="Mahalashmi Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/SIP_LOGO.png" alt="SIP Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/KUKU_LOGO.png" alt="Kuku Logo" className="image" />
            </li>

            <li>
              <img src="/LOGO_ASSESTS/IAOI_LOGO.png" alt="IAOI Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/SPECTRUM_LOGO (1).png" alt="Spectrum Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/MM_KITCHEN_LOGO.png" alt="MM Kitchen Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/IMPLANTREE_LOGO.png" alt="Implantree Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/MAHALASHMI_LOGO.png" alt="Mahalashmi Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/SIP_LOGO.png" alt="SIP Logo" className="image" />
            </li>
            <li>
              <img src="/LOGO_ASSESTS/KUKU_LOGO.png" alt="Kuku Logo" className="image" />
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Body and general resets */
        :global(body) {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #070707;
          cursor: none; /* Hide default cursor */
        }

        div {
          gap: 50px;
        }

        li {
          gap: 10px;
        }

        .marquee {
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
          box-sizing: border-box;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          animation: scroll-left 15s linear infinite;
        }

        .marquee-content {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .marquee-content li {
          padding: 0 20px;
          font-size: 1.2rem;
          color: #333;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Images styling */
        .image {
          height: 50px; /* example fixed height, adjust as needed */
          width: auto;
          object-fit: contain;
        }

        /* Custom Cursor Styling */
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.15s ease;
        }

        .rec-circle {
          width: 100%;
          height: 100%;
          border: 2px solid white;
          border-radius: 6px;
          transition: background-color 0.3s ease, transform 0.15s ease;
        }

        /* Click effect on cursor */
        .rec-circle.clicked {
          background-color: rgba(255, 255, 255, 0.3);
          transform: scale(0.85);
        }
      `}
      </style>
    </>
  );
}
