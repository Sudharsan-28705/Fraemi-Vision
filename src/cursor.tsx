import React, { useEffect,useRef } from 'react'

export default function Cursor() {
    // Refs for cursor and circle
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

    <style jsx>{`.custom-cursor {
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
        }`}</style>
    </>
    
  )
}
