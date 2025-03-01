import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Volty.css";

export const Cuberto = ({
  size = 10,
  color = "#0C0C0C",
  smooth = false,
  text ="",
  radial=false
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
        duration: 1.3,
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

export const TextBentoo = ({ text = "Hello", color = "#0C0C0C", min = 50,max=300,bottom=20,left=20 }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

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
    if (textRef.current) {
      let fontsize = mouse.y < (min+100) ? min : mouse.y;
      gsap.to(textRef.current, {
        fontWeight: mouse.x,
        fontSize: fontsize > max ? max : fontsize,
        duration: 1.3,
        ease: "expo.out"
      });
    }
  }, [mouse]);
  return (
    <h1 ref={textRef}  
    style={{
      color : text ? color : "#0C0C0C",
      position: "absolute",
      bottom: bottom,
      left: left,
    }}>
      {text}
    </h1>
  );
};

export const ImageTrail = ({images =[ "https://i.pinimg.com/474x/22/28/03/22280349e233c5c0773b895c997c2c04.jpg","https://i.pinimg.com/474x/44/92/b4/4492b4ba8a0e9539d073fc4bf5da8935.jpg"," https://i.pinimg.com/474x/87/df/b9/87dfb9718758e67702d9431bc3dec264.jpg","https://i.pinimg.com/736x/32/ae/37/32ae372a87ef780a789a754450ced028.jpg"," https://i.pinimg.com/736x/8a/2c/f9/8a2cf9dc06db2522e3da27295bcf155c.jpg"],width=108,height=216,rounded=5}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const trailRef = useRef(null);

  useEffect(() => {
    const mouseMove = (event) => {
      setMouse({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  let zIndex=[];
  for(let i=images.length+1;i>0;i--) zIndex.push(i*10);
  useLayoutEffect(() => {
    if (trailRef.current) {
      gsap.to(trailRef.current.children, {
        top: mouse.y,
        left: mouse.x,
        duration: 1.3,
        ease: "expo.out",
        stagger: 0.1
      });
    }
  }, [mouse]);
  return (
    <div style={{position:"relative"}} ref={trailRef}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="trail"
          className="images"
          style={{
            width: width,
            height: height,
            zIndex: zIndex[index],
            borderRadius: rounded,
          }}
        />
      ))}
    </div>
  );
};
