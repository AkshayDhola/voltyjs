import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Volty.css";

export const Cuberto = ({
  size = 40,
  color = "transparent",
  smooth = false,
  tails=false,
  lines=false
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
    <div ref={cubertoRef} className="cuberto" style={{width:size,height:size,backgroundColor:color,border: color === 'transparent' && '1px solid rgba(0, 0,0,0.5)'}}></div>
  );
};




export const Lines = ({ colors = ["#fefa02", "#9aa8e1", "#f57faa", "#fb2832", "#559ce2", "#e27b63", "#e82c31"],size=10 }) => {
  const lineRef = useRef([]);
  const iRef = (el) => {
    if (el && !lineRef.current.includes(el)) {
      lineRef.current.push(el);
    }
  };
  const [pnt, setPnt] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const parray = [40, 35, 30, 25, 20, 15, 15, 10];
  useEffect(() => {
    const mouseMove = (event) => {
      setPnt({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePath = () => {
      lineRef.current.forEach((line, index) => {
        let p = line.p || [];
        p.unshift({ ...pnt });
        while (p.length > parray[index]) {
          p.pop();
        }
        line.p = p;
        if (p.length > 1) {
          let d = `M ${p[0].x} ${p[0].y}`;
          for (let i = 1; i < p.length; i++) {
            d += ` L ${p[i].x} ${p[i].y}`;
          }
          line.setAttribute('d', d);
        }
      });
      requestAnimationFrame(updatePath);
    };
    updatePath();
  }, [pnt]);

  return (
    <svg className="lines">
      <path d="" ref={iRef} className="line" style={{ stroke: colors[0], strokeWidth: size}}></path>
      <path d="" ref={iRef} className="line" style={{ stroke: colors[1], strokeWidth: size }}></path>
      <path d="" ref={iRef} className="line" style={{ stroke: colors[2], strokeWidth: size }}></path>
      <path d="" ref={iRef} className="line" style={{ stroke: colors[3], strokeWidth: size }}></path>
      <path d="" ref={iRef} className="line" style={{ stroke: colors[4], strokeWidth: size }}></path>
      <path d="" ref={iRef} className="line" style={{ stroke: colors[5], strokeWidth: size }}></path>
      <path d="" ref={iRef} className="line" style={{ stroke: colors[6], strokeWidth: size }}></path>
    </svg>
  );
};


export const Tales =()=>{

}