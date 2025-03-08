import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Volty.css";
gsap.registerPlugin();

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

export const Wheel = ({ images = ["https://i.pinimg.com/474x/2a/ef/a4/2aefa45cf0ae9f5c15cf5ebeba03ff84.jpg","https://i.pinimg.com/474x/fc/48/44/fc4844de38850753a7465e80a04fc66c.jpg","https://i.pinimg.com/474x/75/d0/fe/75d0fed516c77dca9d5be81cc3276fc2.jpg","https://i.pinimg.com/474x/1a/7d/fa/1a7dfacd5346b48154462ab4d7994507.jpg","https://i.pinimg.com/474x/5c/18/61/5c1861e64398bbfb14a124d498ed92ca.jpg","https://i.pinimg.com/474x/3e/0b/48/3e0b48331ff26098e683196ff8cce389.jpg","https://i.pinimg.com/474x/1b/42/20/1b422058a2835b28a30bf68b0aae298b.jpg","https://i.pinimg.com/474x/24/53/76/24537688a4b7708edf1bb8c39bda8aef.jpg","https://i.pinimg.com/474x/c8/56/92/c85692fe5b52e2abcd4d54bed538fa98.jpg","https://i.pinimg.com/474x/33/7c/05/337c05137c4fc16f403083797183eab5.jpg","https://i.pinimg.com/474x/71/59/fd/7159fd1f7673fb119903c6b09d654b4f.jpg"], width="140px", height="270px" }) => {
    const wheelRef = useRef(null);

    useEffect(() => {
        const wheel = wheelRef.current;
        const cards = gsap.utils.toArray(".wheel__card");

        const setup = () => {
            const radius = wheel.offsetWidth / 3;
            const center = wheel.offsetWidth / 2;
            const total = cards.length;
            const slice = (2 * Math.PI) / total;

            cards.forEach((item, i) => {
                const angle = i * slice;
                const x = center + radius * Math.sin(angle);
                const y = center - radius * Math.cos(angle);

                gsap.set(item, {
                    rotation: `${angle}_rad`,
                    xPercent: -50,
                    yPercent: -50,
                    x,
                    y
                });
            });
        };

        setup();
        window.addEventListener("resize", setup);

        let rotation = 0;
        let isDragging = false;
        let startX = 0;
        let velocity = 0;
        let animationFrame;

        const onMouseDown = (e) => {
            isDragging = true;
            startX = e.clientX;
            cancelAnimationFrame(animationFrame);
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            const delta = e.clientX - startX;
            rotation += delta * 0.3;
            velocity = delta * 0.5;
            gsap.to(wheel, { rotate: rotation, duration: 0.3, ease: "power2.out" });
            startX = e.clientX;
        };

        const onMouseUp = () => {
            isDragging = false;
            smoothInertia();
        };

        const smoothInertia = () => {
            if (Math.abs(velocity) > 0.1) {
                rotation += velocity;
                gsap.to(wheel, { rotate: rotation, duration: 0.5, ease: "power3.out" });
                velocity *= 0.95;
                animationFrame = requestAnimationFrame(smoothInertia);
            }
        };

        wheel.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("resize", setup);
            wheel.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, []);

    return (
        <div className="app-container">
            <section className="section-container">
                <div ref={wheelRef} className="wheel-container">
                    {images.map((src, i) => (
                        <div key={i} className="wheel__card">
                            <img src={src} alt="img" className="wheel__image" style={{width:width,height:height,objectFit:"cover",userSelect:"none"}} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};


export const DrawCanvas = ()=> {
  const canvas = useRef();
  const prevPosition = useRef(null)

  const init = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight); 
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const handleMouse = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if(prevPosition.current != null){
      const { x, y } = prevPosition.current;
      const ctx = canvas.current.getContext("2d");
      ctx.globalCompositeOperation = "destination-out"; // Set before drawing
      for(let i = 0 ; i < nbOfCircles ; i++){
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);
        ctx.beginPath();
        ctx.globalAlpha = 0.7;
        ctx.fillStyle ="white"; 
        ctx.arc(targetX, targetY, 50, 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    prevPosition.current = {
      x: clientX,
      y: clientY
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{position:"relative",width:"100vw",height:"100vh"}}>
      <canvas ref={canvas} onMouseMove={handleMouse} height={window.innerHeight} width={window.innerWidth}/>
    </div>
  );
};


