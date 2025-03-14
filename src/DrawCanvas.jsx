import React, { useRef, useEffect } from "react";

export const DrawCanvas = () => {
  const canvas = useRef(null);
  const prevPosition = useRef(null);

  const init = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const handleMouse = (e) => {
    const { clientX, clientY, movementX, movementY } = e;

    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if (prevPosition.current) {
      const { x, y } = prevPosition.current;
      const ctx = canvas.current.getContext("2d");
      ctx.globalCompositeOperation = "destination-out";

      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);
        ctx.beginPath();
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = "white";
        ctx.arc(targetX, targetY, 50, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    prevPosition.current = { x: clientX, y: clientY };
  };

  useEffect(() => {
    init();
    const handleMouseMove = (e) => handleMouse(e);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <canvas
        ref={canvas}
        height={window.innerHeight}
        width={window.innerWidth}
      />
    </div>
  );
};
