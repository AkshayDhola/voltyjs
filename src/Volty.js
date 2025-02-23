import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Volty.css";

export const Cuberto = ({
  size = 40,
  color = "transparent",
  smooth = false,
  text ="",
  radial=false,
  img = ""
}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cubertoRef = useRef(null);
  const cubertoText = useRef(null);
  const cubertoImg = useRef(null);

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
    if (cubertoText.current) {
      gsap.to(cubertoText.current, {
        top: mouse.y,
        left: mouse.x,
        duration: 1,
        ease: smooth ? "power3" : "expo.out",
      });
    }
    if (cubertoImg.current) {
      gsap.to(cubertoImg.current, {
        top: mouse.y,
        left: mouse.x,
        duration: 1,
        ease: smooth ? "power3" : "expo.out",
      });
    }
  }, [mouse]);
  return (
    <>
    {text ?(
      <div className="cuberto_text" ref={cubertoText} style={{color:color}}>{text}</div>
    ) : img ? (
      <img className="cuberto_img" ref={cubertoImg} src={img} style={{width:size,height:size}}></img>
    ):(
      <div ref={cubertoRef} className={`cuberto ${radial && "radial"}`} style={{width:size,height:size,backgroundColor:color,border: color === 'transparent' && '1px solid rgba(0, 0,0,0.5)'}}></div>
    )}
    </>
  );
};
