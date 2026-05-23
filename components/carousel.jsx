import React, { useEffect, useRef, useState } from "react";

export default function Carousel({ images = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images.length) return;
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(timerRef.current);
  }, [images.length, interval, paused]);

  if (!images.length) return null;

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`slide-${i}`} draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
}
