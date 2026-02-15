'use client';

import React, {
  useEffect,
  useRef,
  useCallback,
  useState
} from 'react';
import { gsap } from 'gsap';

export interface TargetCursorProps {
  targetSelector?: string;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  parallaxOn?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  targetSelector = '.cursor-target',
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const activeTargetRef = useRef<Element | null>(null);
  const targetCornerPositionsRef = useRef<{ x: number; y: number }[] | null>(null);
  const tickerFnRef = useRef<(() => void) | null>(null);
  const activeStrengthRef = useRef({ current: 0 });

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const hasTouch =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const smallScreen =
      typeof window !== 'undefined' && window.innerWidth <= 768;

    const userAgent =
      typeof navigator !== 'undefined'
        ? navigator.userAgent.toLowerCase()
        : '';

    const mobileRegex =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

    setIsMobile((hasTouch && smallScreen) || mobileRegex.test(userAgent));
  }, []);

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.12,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    const cursor = cursorRef.current;
    const corners = cursor.querySelectorAll<HTMLDivElement>(
      '.target-cursor-corner'
    );
    cornersRef.current = corners;

    const originalCursor = document.body.style.cursor;

    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    const tickerFn = () => {
      if (
        !targetCornerPositionsRef.current ||
        !cursorRef.current ||
        !cornersRef.current
      )
        return;

      const strength = activeStrengthRef.current.current;
      if (strength === 0) return;

      const cursorX = gsap.getProperty(cursorRef.current, 'x') as number;
      const cursorY = gsap.getProperty(cursorRef.current, 'y') as number;

      cornersRef.current.forEach((corner, i) => {
        const targetX =
          targetCornerPositionsRef.current![i].x - cursorX;
        const targetY =
          targetCornerPositionsRef.current![i].y - cursorY;

        gsap.to(corner, {
          x: targetX,
          y: targetY,
          duration: strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.08,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    };

    tickerFnRef.current = tickerFn;

    const moveHandler = (e: MouseEvent) =>
      moveCursor(e.clientX, e.clientY);

    window.addEventListener('mousemove', moveHandler);

    const enterHandler = (e: MouseEvent) => {
      const target = (e.target as Element).closest(targetSelector);
      if (!target) return;
      if (!cursorRef.current || !cornersRef.current) return;
      if (activeTargetRef.current === target) return;

      activeTargetRef.current = target;

      const rect = target.getBoundingClientRect();
      const borderWidth = 3;
      const cornerSize = 12;

      targetCornerPositionsRef.current = [
        { x: rect.left - borderWidth, y: rect.top - borderWidth },
        { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
        {
          x: rect.right + borderWidth - cornerSize,
          y: rect.bottom + borderWidth - cornerSize
        },
        { x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize }
      ];

      gsap.ticker.add(tickerFn);
      gsap.to(activeStrengthRef.current, {
        current: 1,
        duration: hoverDuration,
        ease: 'power2.out'
      });

      const leaveHandler = () => {
        gsap.ticker.remove(tickerFn);
        activeStrengthRef.current.current = 0;
        targetCornerPositionsRef.current = null;
        activeTargetRef.current = null;
      };

      target.addEventListener('mouseleave', leaveHandler, {
        once: true
      });
    };

    window.addEventListener('mouseover', enterHandler);

    const downHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.2 });
      gsap.to(cursor, { scale: 0.9, duration: 0.2 });
    };

    const upHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousedown', downHandler);
    window.addEventListener('mouseup', upHandler);

    return () => {
      gsap.ticker.remove(tickerFn);
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);
      window.removeEventListener('mousedown', downHandler);
      window.removeEventListener('mouseup', upHandler);
      document.body.style.cursor = originalCursor;
    };
  }, [
    isMobile,
    targetSelector,
    moveCursor,
    hideDefaultCursor,
    hoverDuration,
    parallaxOn
  ]);

  if (isMobile === null || isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]"
      style={{ willChange: 'transform' }}
    >
      <div
        ref={dotRef}
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-white -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0" />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-white translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0" />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-white translate-x-1/2 translate-y-1/2 border-l-0 border-t-0" />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-white -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0" />
    </div>
  );
};

export default TargetCursor;
