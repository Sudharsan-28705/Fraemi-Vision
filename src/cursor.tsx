"use client";

import {
    useEffect,
    useRef,
    useCallback,
    useMemo,
    useState,
} from "react";
import { gsap } from "gsap";

interface TargetCursorProps {
    targetSelector?: string;
    spinDuration?: number;
    hideDefaultCursor?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
    targetSelector = ".cursor-target",
    spinDuration = 2,
    hideDefaultCursor = true,
}) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cornersRef = useRef<HTMLDivElement[]>([]);
    const spinTl = useRef<gsap.core.Timeline | null>(null);

    const [mounted, setMounted] = useState(false);

    // Prevent SSR crash
    useEffect(() => {
        setMounted(true);
    }, []);

    const constants = useMemo(
        () => ({
            borderWidth: 3,
            cornerSize: 100,
        }),
        []
    );

    const moveCursor = useCallback((x: number, y: number) => {
        if (!cursorRef.current) return;
        gsap.to(cursorRef.current, {
            x,
            y,
            duration: 0.08,
            ease: "power3.out",
        });
    }, []);

    useEffect(() => {
        if (!mounted || !cursorRef.current) return;

        const cursor = cursorRef.current;
        const originalCursor = document.body.style.cursor;

        if (hideDefaultCursor) {
            document.body.style.cursor = "none";
        }

        cornersRef.current = Array.from(
            cursor.querySelectorAll<HTMLDivElement>(".target-cursor-corner")
        );

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });

        // Spin disabled for visibility
        spinTl.current = gsap
            .timeline({ repeat: -1 })
            .to(cursor, {
                rotation: "+=360",
                duration: spinDuration,
                ease: "none",
            });

        const moveHandler = (e: MouseEvent) =>
            moveCursor(e.clientX, e.clientY);

        window.addEventListener("mousemove", moveHandler);

        const enterHandler = (e: MouseEvent) => {
            const target = (e.target as Element)?.closest(
                targetSelector
            );
            if (!target) return;

            const rect = target.getBoundingClientRect();
            const { borderWidth, cornerSize } = constants;

            const positions = [
                { x: rect.left - borderWidth, y: rect.top - borderWidth },
                {
                    x: rect.right + borderWidth - cornerSize,
                    y: rect.top - borderWidth,
                },
                {
                    x: rect.right + borderWidth - cornerSize,
                    y: rect.bottom + borderWidth - cornerSize,
                },
                {
                    x: rect.left - borderWidth,
                    y: rect.bottom + borderWidth - cornerSize,
                },
            ];

            gsap.killTweensOf(cursor, "rotation");
            spinTl.current?.pause();
            gsap.set(cursor, { rotation: 0 });

            const cursorX = gsap.getProperty(cursor, "x") as number;
            const cursorY = gsap.getProperty(cursor, "y") as number;

            cornersRef.current.forEach((corner, i) => {
                gsap.to(corner, {
                    x: positions[i].x - cursorX,
                    y: positions[i].y - cursorY,
                    duration: 0.25,
                    ease: "power2.out",
                });
            });
        };

        const leaveHandler = () => {
            spinTl.current?.resume();
            cornersRef.current.forEach((corner) => {
                gsap.to(corner, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out",
                });
            });
        };

        window.addEventListener("mouseover", enterHandler);
        window.addEventListener("mouseout", leaveHandler);

        return () => {
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseover", enterHandler);
            window.removeEventListener("mouseout", leaveHandler);
            spinTl.current?.kill();
            document.body.style.cursor = originalCursor;
        };
    }, [mounted, spinDuration, moveCursor, constants, hideDefaultCursor, targetSelector]);

    if (!mounted) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{ width: 100, height: 100 }}
        >
            {/* 100px Corners */}
            <div className="target-cursor-corner absolute w-[10px] h-[10px] border-[3px] border-white border-r-0 border-b-0" />
            <div className="target-cursor-corner absolute w-[10px] h-[10px] border-[3px] border-white border-l-0 border-b-0" />
            <div className="target-cursor-corner absolute w-[10px] h-[10px] border-[3px] border-white border-l-0 border-t-0" />
            <div className="target-cursor-corner absolute w-[10px] h-[10px] border-[3px] border-white border-r-0 border-t-0" />
        </div>
    );
};

export default TargetCursor;
