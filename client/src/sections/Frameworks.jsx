import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function Frameworks() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Move from first item centered to last item centered
    const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

    return (
        <div id="frameworks" className="h-auto overflow-visable">
            <section className="text-7xl vintage flex flex-col flex-end items-center justify-center text-center pb-10 h-[10vh]">
                <h1 className="pt-10 uppercase">Frameworks</h1>
            </section>

            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen w-100 mx-auto flex items-center justify-start overflow-visible">
                    <motion.div className="flex gap-8 will-change-transform" style={{ x }}>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="gallery-item shrink-0 w-100 h-120 rounded-xl relative overflow-hidden"
                                style={
                                    {
                                        "--item-color": item.color,
                                        "--item-image": `url(${item.image})`,
                                    } 
                                }
                            >
                                <div className="absolute bottom-7 left-7 z-1">
                                    <h2 className="text-4xl font-extrabold text-secondary m-0 vintage tracking-wider">{item.label}</h2>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>


        </div>
    )
}



const items = [
    { id: 1, color: "#ff0088", label: "JavaScript", image: "/frameworks/javascript.png" },
    { id: 2, color: "#dd00ee", label: "React", image: "/frameworks/react.svg" },
    { id: 3, color: "#9911ff", label: "Redux Toolkit", image: "/frameworks/redux.png" },
    { id: 4, color: "#0d63f8", label: "TailwindCSS", image: "/frameworks/tailwind.png" },
    { id: 5, color: "#0cdcf7", label: "DaisyUI", image: "/frameworks/daisy.jpg" },
    { id: 6, color: "#0cdcf7", label: "MongoDB", image: "/frameworks/mongodb.png" },
    { id: 7, color: "#0cdcf7", label: "PostgreSQL", image: "/frameworks/postgres.png" },
    { id: 8, color: "#0cdcf7", label: "Faker", image: "/frameworks/faker.jpg" },
    { id: 9, color: "#0cdcf7", label: "Node.js", image: "/frameworks/nodejs.png" },
    { id: 10, color: "#0cdcf7", label: "Socket.io", image: "" },
    { id: 11, color: "#0cdcf7", label: "gitLab", image: "/frameworks/git.png" },
    { id: 12, color: "#0cdcf7", label: "Agile", image: "" },
    { id: 13, color: "#0cdcf7", label: "Three.js", image: "/frameworks/threejs.svg" },
    { id: 14, color: "#0cdcf7", label: "Motion", image: "" },
    { id: 15, color: "#0cdcf7", label: "Ollama", image: "/frameworks/llama.jpg" },
]
    

const ITEM_WIDTH = 400
const GAP = 30
