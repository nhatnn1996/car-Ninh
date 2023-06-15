'use client';
import { useRef } from 'react';

const HoverEffect = ({ children, numberKey = 10 }: any) => {
  const slide: any = useRef();
  const handleMouseMove = (event: any) => {
    const el = slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', (-event.clientX + r.width) * -1);
    el.style.setProperty('--y', (- event.clientY + r.height) * -1);
  };

  const handleMouseLeave = (event: any) => {
    slide.current.style.setProperty('--x', 0);
    slide.current.style.setProperty('--y', 0);
  };
  return (
    <div
      ref={slide}
      className="hover-effect"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverEffect;
