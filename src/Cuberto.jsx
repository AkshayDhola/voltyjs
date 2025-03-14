import React, { useLayoutEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import useMousePosition from "./useMousePosition";
import "./Volty.css";

export const Cuberto = ({
  size = 10,
  color = "#0C0C0C",
  smooth = false,
  text = "",
  radial = false,
}) => {
  const mouse = useMousePosition();
  const cubertoRef = useRef(null);

  const styles = useMemo(
    () => ({
      width: size,
      height: size,
      fontSize: size,
      backgroundColor: text ? "" : color,
      color: text ? color : "#0C0C0C",
      border: color === "" ? "1px solid #0C0C0C" : undefined,
    }),
    [size, color, text],
  );

  const className = useMemo(() => {
    return `${text ? "cuberto_text" : "cuberto"} ${radial ? "radial" : ""}`;
  }, [text, radial]);

  useLayoutEffect(() => {
    if (cubertoRef.current) {
      gsap.to(cubertoRef.current, {
        top: mouse.y,
        left: mouse.x,
        duration: 1.3,
        ease: smooth ? "power3" : "expo.out",
      });
    }
  }, [mouse, smooth]);

  return (
    <div ref={cubertoRef} className={className} style={styles}>
      {text || null}
    </div>
  );
};
