import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import useMousePosition from "./useMousePosition";
import { gsap } from "gsap";

export const TextBentoo = ({
  text = "Hello",
  color = "#0C0C0C",
  min = 50,
  max = 300,
  bottom = 20,
  left = 20,
}) => {
  const mouse = useMousePosition();
  const textRef = useRef(null);
  useLayoutEffect(() => {
    if (textRef.current) {
      const fontsize = Math.max(min, Math.min(mouse.y, max));
      gsap.to(textRef.current, {
        fontWeight: mouse.x,
        fontSize: fontsize,
        duration: 1.3,
        ease: "expo.out",
      });
    }
  }, [mouse, min, max]);

  return (
    <h1
      ref={textRef}
      style={{
        color: text ? color : "#0C0C0C",
        position: "absolute",
        bottom: bottom,
        left: left,
      }}
    >
      {text}
    </h1>
  );
};
