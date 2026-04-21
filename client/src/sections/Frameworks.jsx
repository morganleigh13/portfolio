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
    <div id="frameworks" className="h-auto overflow-visable">
      <section className="text-7xl vintage flex flex-col flex-end items-center justify-center text-center pb-10 h-[10vh]">
        <h1 className="pt-10 uppercase text-primary">Technical Skills</h1>
      </section>

      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen w-100 mx-auto flex items-center justify-start overflow-visible">
          <motion.div
            className="flex gap-8 will-change-transform"
            style={{ x }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item shrink-0 w-100 h-120 rounded-xl relative overflow-hidden"
                style={{
                  "--item-color": item.color,
                  "--item-image": `url(${item.image})`,
                }}
              >
                <div className="absolute bottom-7 left-7 z-1">
                  <h2 className="text-4xl font-extrabold text-secondary m-0 vintage tracking-wider">
                    {item.label}
                  </h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}



const ITEM_WIDTH = 400;
const GAP = 30;
