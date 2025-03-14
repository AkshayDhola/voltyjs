import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import "./Volty.css";

export const ThreeSlider = ({
  images = [
    "https://i.pinimg.com/474x/22/28/03/22280349e233c5c0773b895c997c2c04.jpg",
    "https://i.pinimg.com/474x/44/92/b4/4492b4ba8a0e9539d073fc4bf5da8935.jpg",
    "https://i.pinimg.com/474x/87/df/b9/87dfb9718758e67702d9431bc3dec264.jpg",
    "https://i.pinimg.com/736x/32/ae/37/32ae372a87ef780a789a754450ced028.jpg",
    "https://i.pinimg.com/736x/8a/2c/f9/8a2cf9dc06db2522e3da27295bcf155c.jpg",
  ],
  size = 200,
}) => {
  const [card, setCard] = useState([]);
  const sliderRef = useRef(null);

  const cardData = useMemo(() => {
    return images.map((image, index) => ({
      i: index + 1,
      src: image,
    }));
  }, [images]);

  const scroll = useCallback(() => {
    const position = window.scrollY;
    const slider = sliderRef.current;
    if (slider) {
      const transform = `translate3d(-50%,-50%,0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`;
      const Zoff = position * 0.5;
      slider.style.transform = `${transform} translateY(${Zoff}px)`;
    }
  }, []);

  const MouseOver = useCallback((e) => {
    e.currentTarget.style.left = "15%";
  }, []);

  const MouseOut = useCallback((e) => {
    e.currentTarget.style.left = "0%";
  }, []);

  useEffect(() => {
    setCard(cardData);
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [cardData, scroll]);

  const cardStyle = useMemo(
    () => ({
      width: size,
      height: size,
      margin: `-${size - 100}px 0`,
    }),
    [size],
  );

  return (
    <div className="threeslider" ref={sliderRef}>
      {card.map((img) => (
        <div
          key={img.i}
          className="card"
          style={cardStyle}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
        >
          <img
            src={img.src}
            alt={`Image ${img.i}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};
