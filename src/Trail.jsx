import React, { useLayoutEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import useMousePosition from "./useMousePosition";
import "./Volty.css";

gsap.registerPlugin();
export const Trail = ({
  images = [
    "https://i.pinimg.com/474x/22/28/03/22280349e233c5c0773b895c997c2c04.jpg",
    "https://i.pinimg.com/474x/44/92/b4/4492b4ba8a0e9539d073fc4bf5da8935.jpg",
    "https://i.pinimg.com/474x/87/df/b9/87dfb9718758e67702d9431bc3dec264.jpg",
    "https://i.pinimg.com/736x/32/ae/37/32ae372a87ef780a789a754450ced028.jpg",
    "https://i.pinimg.com/736x/8a/2c/f9/8a2cf9dc06db2522e3da27295bcf155c.jpg",
  ],
  width = 108,
  height = 216,
  rounded = 5,
}) => {
  const mouse = useMousePosition();
  const trailRef = useRef(null);

  const zIndex = useMemo(() => {
    const arr = [];
    for (let i = images.length + 1; i > 0; i--) arr.push(i * 1000);
    return arr;
  }, [images.length]);

  const imageStyles = useMemo(() => {
    return images.map((_, index) => ({
      width: width,
      height: height,
      zIndex: zIndex[index],
      borderRadius: rounded,
    }));
  }, [width, height, rounded, zIndex]);

  useLayoutEffect(() => {
    if (trailRef.current) {
      gsap.to(trailRef.current.children, {
        top: mouse.y,
        left: mouse.x,
        duration: 1.3,
        ease: "expo.out",
        stagger: 0.1,
      });
    }
  }, [mouse]);

  return (
    <div style={{ position: "relative" }} ref={trailRef}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="trail"
          className="images"
          style={imageStyles[index]}
        />
      ))}
    </div>
  );
};
