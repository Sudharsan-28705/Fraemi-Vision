"use client";
import React, { useState, useEffect, useRef } from 'react';

// Define the type for the position state for type safety
type Position = {
  x: number;
  y: number;
};

// The number of points in the cursor's trail
const TRAIL_LENGTH = 15;

/**
 * A custom cursor component that replaces the default mouse cursor with a
 * stylish, animated "REC"-style cursor and a smooth trailing effect.
 */
const CustomCursor: React.FC = () => {
    // State to track the cursor's primary position (x, y coordinates)
    const [position, setPosition] = useState<Position>({ x: -100, y: -100 });
    // State to store the history of positions for the trail effect
    const [trail, setTrail] = useState<Position[]>([]);
    // State to track whether the mouse button is being pressed
    const [isClicked, setIsClicked] = useState<boolean>(false);
    
    // A ref to store the latest cursor position for use in the animation loop
    const latestPositionRef = useRef<Position>(position);

    useEffect(() => {
        // Event handler for mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            const newPosition = { x: e.clientX, y: e.clientY };
            setPosition(newPosition);
            latestPositionRef.current = newPosition; // Update ref for animation loop
        };

        // Event handler for mouse down (click start)
        const handleMouseDown = () => {
            setIsClicked(true);
        };

        // Event handler for mouse up (click end)
        const handleMouseUp = () => {
            setIsClicked(false);
        };

        // Add event listeners to the document when the component mounts
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        let animationFrameId: number;

        // Animation loop to update the trail
        const animateTrail = () => {
            setTrail(prevTrail => {
                const newTrail = [latestPositionRef.current, ...prevTrail];
                // Limit the trail to a fixed length
                if (newTrail.length > TRAIL_LENGTH) {
                    newTrail.pop();
                }
                return newTrail;
            });
            animationFrameId = requestAnimationFrame(animateTrail);
        };

        // Start the animation loop
        animateTrail();

        // Cleanup function to remove event listeners and cancel animation frame
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    // Dynamically build class strings for the main cursor element
    const cursorClasses = [
        "fixed", "w-[25px]", "h-[25px]",
        "pointer-events-none",
        "z-[9999]",
        "transition-transform", "duration-300",
        "-translate-x-1/2", "-translate-y-1/2",
        isClicked ? "scale-75" : "scale-100",
    ].join(' ');

    // Dynamic classes for the center "REC" circle, now much brighter
    const recCircleClasses = [
        "absolute", "top-1/2", "left-1/2",
        "w-2", "h-2", "rounded-full",
        "-translate-x-1/2", "-translate-y-1/2",
        "transition-colors", "duration-200", "ease-in-out",
        isClicked ? "bg-gray-300" : "bg-white", // Brighter center circle (white)
    ].join(' ');

    // Base classes for corner brackets, now a lighter gray for better contrast
    const bracketBaseClasses = "absolute w-[10px] h-[10px] border-[3px] border-gray-300 rounded-[2px] box-border";

    return (
        // Add an ID to the wrapper to allow hiding it on coarse pointer devices via CSS
        <div id="custom-cursor">
            {/* Render the trail dots */}
            {trail.map((trailPos, index) => {
                const opacity = Math.max(0, 1 - index / TRAIL_LENGTH);
                const scale = Math.max(0, 1 - index / TRAIL_LENGTH);

                return (
                    <div
                        key={index}
                        // Use a lighter grey color for the trail for better visibility
                        className="fixed w-2 h-2 bg-gray-400 rounded-full pointer-events-none z-[9998]"
                        style={{
                            left: `${trailPos.x}px`,
                            top: `${trailPos.y}px`,
                            opacity: opacity,
                            transform: `translate(-50%, -50%) scale(${scale})`,
                            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
                        }}
                    ></div>
                );
            })}

            {/* Render the main cursor head */}
            <div
                className={cursorClasses}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
                {/* Corner brackets */}
                <span className={`${bracketBaseClasses} top-0 left-0 border-r-0 border-b-0`}></span>
                <span className={`${bracketBaseClasses} top-0 right-0 border-l-0 border-b-0`}></span>
                <span className={`${bracketBaseClasses} bottom-0 left-0 border-r-0 border-t-0`}></span>
                <span className={`${bracketBaseClasses} bottom-0 right-0 border-l-0 border-t-0`}></span>
                
                {/* Center recording-style circle */}
                <div className={recCircleClasses}></div>
            </div>
        </div>
    );
};

export default CustomCursor;
