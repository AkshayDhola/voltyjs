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

export const Trail = ({images =[ "https://i.pinimg.com/474x/22/28/03/22280349e233c5c0773b895c997c2c04.jpg","https://i.pinimg.com/474x/44/92/b4/4492b4ba8a0e9539d073fc4bf5da8935.jpg"," https://i.pinimg.com/474x/87/df/b9/87dfb9718758e67702d9431bc3dec264.jpg","https://i.pinimg.com/736x/32/ae/37/32ae372a87ef780a789a754450ced028.jpg"," https://i.pinimg.com/736x/8a/2c/f9/8a2cf9dc06db2522e3da27295bcf155c.jpg"],width=108,height=216,rounded=5}) => {
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
  for(let i=images.length+1;i>0;i--) zIndex.push(i*1000);
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

export const ThreeSlider =({images =[ "https://i.pinimg.com/474x/22/28/03/22280349e233c5c0773b895c997c2c04.jpg","https://i.pinimg.com/474x/44/92/b4/4492b4ba8a0e9539d073fc4bf5da8935.jpg"," https://i.pinimg.com/474x/87/df/b9/87dfb9718758e67702d9431bc3dec264.jpg","https://i.pinimg.com/736x/32/ae/37/32ae372a87ef780a789a754450ced028.jpg"," https://i.pinimg.com/736x/8a/2c/f9/8a2cf9dc06db2522e3da27295bcf155c.jpg"],size=200}) => {
  const [card, setCard] = useState([]);
  const sliderRef = useRef(null);
  const scroll =()=>{
    const position = window.scrollY;
    const slider = sliderRef.current;
    const transform=`translate3d(-50%,-50%,0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`;
    const Zoff = position*0.5;
    slider.style.transform = `${transform} translateY(${Zoff}px)`;
  }
  const MouseOver =(e)=>{
    e.currentTarget.style.left = "15%";
  }
  const MouseOut =(e)=>{
    e.currentTarget.style.left = "0%";
  }


  useEffect(() => {
    const CardMove = images.map((image, index) => ({
      i : index+1,
      src:image,
    }));
    setCard(CardMove);
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  
  return (
    <div className="threeslider" ref={sliderRef}>
      {card.map((img) => (
        <div key={img.i} className="card" style={{width:size,height:size,margin: `-${size-100}px 0`}} onMouseOver={MouseOver} onMouseOut={MouseOut}>
          <img src={img.src}/>
        </div>   
      ))}
    </div>
  );
};

export const Infinite = ({ children, smoothFactor = 0.05 }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [sectionWidth, setSectionWidth] = useState(0);

  const BUFFER_SECTIONS = 2;
  let targetScroll = 0;
  let currentScroll = 0;
  let isAnimating = false;

  const interpolate = (start, end, factor) => start + (end - start) * factor;

  const setupScrolling = () => {
    const scroller = scrollerRef.current;
    const sections = Array.from(scroller.children);
    scroller.querySelectorAll(".clone").forEach((clone) => clone.remove());

    let calculatedWidth = window.innerWidth;
    setSectionWidth(calculatedWidth);

    for (let i = -BUFFER_SECTIONS; i < BUFFER_SECTIONS; i++) {
      sections.forEach((section) => {
        const clone = section.cloneNode(true);
        clone.classList.add("clone");
        scroller.appendChild(clone);
      });
    }

    scroller.style.width = `${calculatedWidth * (sections.length + BUFFER_SECTIONS * 2)}px`;
    targetScroll = calculatedWidth * sections.length;
    currentScroll = targetScroll;
    scroller.style.transform = `translateX(-${currentScroll}px)`;

    return calculatedWidth;
  };

  const checkBoundary = (calculatedWidth) => {
    const scroller = scrollerRef.current;
    if (currentScroll > calculatedWidth * (BUFFER_SECTIONS + 1)) {
      targetScroll -= calculatedWidth * BUFFER_SECTIONS;
      currentScroll -= calculatedWidth * BUFFER_SECTIONS;
      scroller.style.transform = `translateX(-${currentScroll}px)`;
      return true;
    }
    if (currentScroll < calculatedWidth * BUFFER_SECTIONS) {
      targetScroll += calculatedWidth * BUFFER_SECTIONS;
      currentScroll += calculatedWidth * BUFFER_SECTIONS;
      scroller.style.transform = `translateX(-${currentScroll}px)`;
      return true;
    }
    return false;
  };

  const animateScroll = (calculatedWidth) => {
    const scroller = scrollerRef.current;
    currentScroll = interpolate(currentScroll, targetScroll, smoothFactor);
    scroller.style.transform = `translateX(-${currentScroll}px)`;

    if (Math.abs(targetScroll - currentScroll) < 0.1) {
      isAnimating = false;
    } else {
      requestAnimationFrame(() => animateScroll(calculatedWidth));
    }
  };

  const handleWheelScroll = (e) => {
    e.preventDefault();
    targetScroll += e.deltaY * 0.5;
    checkBoundary(sectionWidth);

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(() => animateScroll(sectionWidth));
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const calculatedWidth = setupScrolling();
      container.addEventListener("wheel", handleWheelScroll, { passive: false });

      return () => {
        container.removeEventListener("wheel", handleWheelScroll);
      };
    }
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-wrapper" ref={scrollerRef}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { className: "scroll-section" })
        )}
      </div>
    </div>
  );
};
