import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const usePageTransition = ({ ref, transitionStyle, color, gridLength }) => {
  const location = useLocation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const removeElements = () => {
      document
        .querySelectorAll(".loader-container, .transition-container")
        .forEach((el) => el.remove());
    };

    const createLoaderContainer = (numDivs) => {
      const container = document.createElement("div");
      container.className = "loader-container";
      for (let i = 0; i < numDivs; i++) {
        const div = document.createElement("div");
        div.style.background = color;
        div.style.width = `${100 / numDivs}%`;
        container.appendChild(div);
      }
      document.body.appendChild(container);
      return container;
    };

    removeElements();

    const bgElements = gsap.utils.toArray(".loader-container div");

    switch (transitionStyle) {
      case 1:
        const loaderContainer1 = createLoaderContainer(gridLength);
        gsap.set(bgElements, {
          clipPath: "polygon(-1% -1%, 101% -1%, 101% 101%, -1% 101%)",
        });
        gsap
          .timeline()
          .to(bgElements, {
            clipPath: "polygon(0% 0%, 98% 0%, 98% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power4",
            delay: 0.5,
          })
          .to(bgElements, {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power4",
            onComplete: removeElements,
          });
        break;

      case 2:
        createLoaderContainer(4);
        gsap.set(bgElements, { yPercent: 0 });
        gsap.to(bgElements, {
          yPercent: 100,
          stagger: 0.4,
          duration: 1.7,
          onComplete: removeElements,
        });
        break;

      case 3:
        const loaderContainer3 = document.createElement("div");
        loaderContainer3.className = "loader-container";
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        );
        svg.setAttribute("viewBox", "0 0 1000 1000");
        svg.setAttribute("preserveAspectRatio", "none");

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        path.setAttribute("id", "svg");
        path.setAttribute("d", "M0,1005S175,995,500,995s500,5,500,5V0H0Z");
        path.setAttribute("fill", color);

        svg.appendChild(path);
        loaderContainer3.appendChild(svg);
        document.body.appendChild(loaderContainer3);

        gsap
          .timeline()
          .to(path, {
            duration: 0.8,
            attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
            ease: "power2.in",
          })
          .to(path, {
            duration: 0.8,
            attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
            ease: "power2.out",
            onComplete: removeElements,
          });
        break;

      case 4:
        const transitionContainer = document.createElement("div");
        transitionContainer.className = "transition-container";

        const createRow = () => {
          const row = document.createElement("div");
          row.style.flex = "1";
          row.style.display = "flex";
          return row;
        };

        const row1 = createRow();
        const row2 = createRow();

        row2.style.transformOrigin = "bottom";

        for (let i = 0; i < gridLength; i++) {
          const block = document.createElement("div");
          block.style.flex = "1";
          block.style.backgroundColor = color;
          row1.appendChild(block);
          row2.appendChild(block.cloneNode());
        }

        transitionContainer.appendChild(row1);
        transitionContainer.appendChild(row2);

        document.body.appendChild(transitionContainer);

        gsap.to(transitionContainer, { opacity: 1, duration: 0.2 });

        gsap.to(row1.children, {
          duration: 1,
          scaleY: 0,
          stagger: 0.2,
          transformOrigin: "top",
          ease: "power2.out",
        });

        gsap.to(row2.children, {
          duration: 1,
          scaleY: 0,
          stagger: 0.2,
          transformOrigin: "bottom",
          ease: "power2.out",
          delay: 0.5,
          onComplete: removeElements,
        });

        break;

      default:
        gsap.to(element, { opacity: 0, onComplete: removeElements });
    }

    return () => {
      removeElements();
    };
  }, [location.pathname, ref, transitionStyle, color]);
};

export const PageTransition = ({
  children,
  transitionStyle = 1,
  color = "black",
  gridLength = 7,
}) => {
  const ref = useRef(null);
  usePageTransition({ ref, transitionStyle, color, gridLength });
  return <div ref={ref}>{children}</div>;
};
