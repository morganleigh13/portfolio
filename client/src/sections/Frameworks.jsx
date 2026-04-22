import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { items } from "../data/index"

export default function Frameworks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="frameworks" className="h-auto overflow-visable technical-background">
      <section className="text-8xl vintage flex flex-col justify-center pt-40 h-[30vh] ps-30">
        <h1 className="uppercase text-primary text-shadow-[3px_4px_6px_var(--color-primary)]">Technical Skills</h1>
      </section>

      <div ref={containerRef} className="relative h-[180vh]">
        <div className="sticky top-0 h-screen w-120 mx-aut0 flex items-center justify-start overflow-visible">
          <motion.div
            className="flex gap-15 will-change-transform"
            style={{ x }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item shrink-0 w-55 h-55 rounded-tl-4xl rounded-br-4xl relative overflow-hidden"
                style={{
                  "--item-color": item.color,
                  "--item-image": `url(${item.image})`,
                }}
              >
                <div className="absolute bottom-2 left-5 z-1">
                  <h2 className="text-3xl font-extrabold text-secondary m-0 vintage tracking-wider">
                    {item.label}
                  </h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <section className="text-7xl tracking-wider vintage flex flex-col justify-center h-[10vh]">
        <h1 className="text-secondary text-shadow-[3px_4px_6px_var(--color-slate-800)] pb-7 ps-10">Personal Projects</h1>
      </section>
    </div>
  );
}



const ITEM_WIDTH = 400;
const GAP = 30;
