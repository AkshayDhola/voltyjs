import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";

export const Cuberto = ({
  size = 40,
  color = "transparent",
  smooth = false,
  triangle = true,
}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cubertoRef = useRef(null);

  useEffect(() => {
    const mouseMove = (event) => {
      setMouse({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useLayoutEffect(() => {
    if (cubertoRef.current) {
      gsap.to(cubertoRef.current, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.3,
        ease: smooth ? "power3" : "expo",
      });
    } else {
      console.error("Element with ref 'cubertoRef' not found.");
    }
  }, [mouse]);

  return (
    <svg ref={cubertoRef} width={size} height={size} className="cuberto">
      {triangle ? (
        <polygon points="50,10,90,90,10,90" fill={color} />
      ) : (
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
      )}
      hello
    </svg>
  );
};
