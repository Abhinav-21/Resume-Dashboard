'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function ThemedCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target instanceof HTMLAnchorElement ||
          e.target instanceof HTMLButtonElement ||
          e.target?.closest('a') ||
          e.target?.closest('button')) &&
        !(e.target instanceof HTMLBodyElement)
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (
        (e.target instanceof HTMLAnchorElement ||
          e.target instanceof HTMLButtonElement ||
          e.target?.closest('a') ||
          e.target?.closest('button')) &&
        !(e.target instanceof HTMLBodyElement)
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className={cn(
        'hidden md:block',
        'pointer-events-none fixed z-50 rounded-full transition-transform duration-150 ease-in-out',
        'bg-primary/20 dark:bg-primary/20',
        isHovering ? 'scale-150' : 'scale-100',
        'h-8 w-8'
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${
          isHovering ? 'scale(1.5)' : 'scale(1)'
        }`,
      }}
    />
  );
}
