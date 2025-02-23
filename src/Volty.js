import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Volty.css";

export const Cuberto = ({
  size = 10,
  color = "#0C0C0C",
  smooth = false,
  text ="",
  radial=false,
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
        top: mouse.y,
        left: mouse.x,
        duration: 1,
        ease: smooth ? "power3" : "expo.out",
      });
    }
  }, [mouse]);
  return (
    <div ref={cubertoRef} className={`${text ? "cuberto_text":'cuberto'} ${radial ? "radial": ''}`} 
    style={{
      width:size,
      height:size,
      fontSize:size,
      backgroundColor: text ? "" : color,
      color : text ? color : "#0C0C0C",
      border: color === '' && '1px solid #0C0C0C'
    }}>
      {text ? text : null}
    </div>
  );
};
