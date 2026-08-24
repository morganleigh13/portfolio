import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { items } from "../data/index";

export default function Frameworks() {
  const containerRef = useRef(null);
  const [viewport, setViewport] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const { cardWidth, cardHeight, gap } = getCardDimensions(viewport.width);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    sensitivity: 0.01
  });

  // Padding keeps the first and last cards centered in the viewport.
  const totalDistance = (items.length - 1) * (cardWidth + gap);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="frameworks" className="h-auto overflow-x-clip technical-background">
      <section className="vintage flex min-h-[22vh] flex-col items-center justify-center px-5 pt-20 text-center sm:min-h-[30vh] sm:px-10 sm:pt-32 lg:pt-40">
        <h1 className="max-w-full break-words text-center text-[clamp(2.25rem,8vw,6rem)] leading-none uppercase text-primary text-shadow-[3px_4px_6px_var(--color-primary)]">
          Technical Skills
        </h1>
      </section>

      <div
        ref={containerRef}
        className="relative overflow-visible"
        // The available vertical scroll distance matches the horizontal card travel.
        style={{ height: `${totalDistance + viewport.height}px` }}
      >
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
          <motion.div
            className="flex w-max will-change-transform"
            style={{
              x,
              gap: `${gap}px`,
              paddingInline: `calc(50vw - ${cardWidth / 2}px)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item relative shrink-0 overflow-hidden rounded-tl-4xl rounded-br-4xl"
                style={{
                  "--item-color": item.color,
                  "--item-image": `url(${item.image})`,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                }}
              >
                <div className="absolute bottom-3 left-3 right-3 z-1 text-center">
                  <h2 className="vintage m-0 text-[clamp(1.1rem,2.2vw,1.75rem)] font-extrabold tracking-wide text-secondary">
                    {item.label}
                  </h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <section className="vintage flex min-h-[16vh] flex-col items-center justify-center px-5 py-12 text-center sm:px-10 sm:py-16">
        <h1 className="max-w-full break-words text-center text-[clamp(2.25rem,6vw,5rem)] leading-none tracking-wide text-secondary text-shadow-[3px_4px_6px_var(--color-slate-800)] lg:pb-7 lg:tracking-wider">
          Personal Projects
        </h1>
      </section>
    </div>
  );
}

function getCardDimensions(width) {
  if (width < 640) {
    const cardWidth = clamp(width - 64, 144, 184);
    return { cardWidth, cardHeight: cardWidth * 1.14, gap: 16 };
  }

  const cardWidth = clamp(width * 0.17, 190, 250);
  return {
    cardWidth,
    cardHeight: cardWidth * 1.12,
    gap: clamp(width * 0.04, 28, 64),
  };
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}
