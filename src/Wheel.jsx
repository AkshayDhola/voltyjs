export const Wheel = ({
  images = [
    "https://i.pinimg.com/474x/2a/ef/a4/2aefa45cf0ae9f5c15cf5ebeba03ff84.jpg",
    "https://i.pinimg.com/474x/fc/48/44/fc4844de38850753a7465e80a04fc66c.jpg",
    "https://i.pinimg.com/474x/75/d0/fe/75d0fed516c77dca9d5be81cc3276fc2.jpg",
    "https://i.pinimg.com/474x/1a/7d/fa/1a7dfacd5346b48154462ab4d7994507.jpg",
    "https://i.pinimg.com/474x/5c/18/61/5c1861e64398bbfb14a124d498ed92ca.jpg",
    "https://i.pinimg.com/474x/3e/0b/48/3e0b48331ff26098e683196ff8cce389.jpg",
    "https://i.pinimg.com/474x/1b/42/20/1b422058a2835b28a30bf68b0aae298b.jpg",
    "https://i.pinimg.com/474x/24/53/76/24537688a4b7708edf1bb8c39bda8aef.jpg",
    "https://i.pinimg.com/474x/c8/56/92/c85692fe5b52e2abcd4d54bed538fa98.jpg",
    "https://i.pinimg.com/474x/33/7c/05/337c05137c4fc16f403083797183eab5.jpg",
    "https://i.pinimg.com/474x/71/59/fd/7159fd1f7673fb119903c6b09d654b4f.jpg",
  ],
  width = "140px",
  height = "270px",
}) => {
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
          y,
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
              <img
                src={src}
                alt="img"
                className="wheel__image"
                style={{
                  width: width,
                  height: height,
                  objectFit: "cover",
                  userSelect: "none",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
