import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Lotus from "./components/canvas/Lotus";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Experiance from "./sections/Experiance";
import "./App.css"

const App = () => {
  const [hidden, setHidden] = useState(false);

  const scrollContainer = useRef();
  const { scrollY } = useScroll();

  const prevScroll = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      console.log("useMotionValueEvent", "previous:", previous, "current:", current, current > previous && current > 150)
      setHidden(true);
    } else {
      console.log("useMotionValueEvent", "previous:", previous, "else")
      setHidden(false);
    }
  });
  
  return (
    <div id="h-auto overflow-visable">
      <Navbar hidden={hidden} />
      <div className="bg-base-300">
      <Lotus /> 
      <Experiance /> 
      <Projects />
      <ContactMe />
      </div> 
    </div>
  );
};

export default App;
