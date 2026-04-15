import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
// import Lotus from "./components/canvas/Lotus";
import Navbar from "./components/Navbar";
// import Projects from "./sections/Projects";
// import ContactMe from "./sections/ContactMe";
// import Experiance from "./sections/Experiance";
import Test from "./Test"
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
  // useEffect(() => {
  //   const current = scrollY.get();
  //   setHidden(current > 150);
  //   prevScroll.current = current;
  // }, []);

  // useEffect(() => {
  //   const cleanup = scrollY.onChange((current) => {
  //     const previous = prevScroll.current;

  //     if (current > previous && current > 150) {
  //       setHidden(true);
  //     } else if (current < previous && current > 0) {
  //       setHidden(false);
  //     }
  //     prevScroll.current = current;
  //   });

  //   return cleanup;
  // }, [scrollY]);
  return (
    <div id="example">
      <Navbar hidden={hidden} />
      <div className="content">
      <Test />
      </div> 
      {/* <Lotus /> */}
      {/* <Experiance /> */}
      {/* <Projects /> */}
      {/* <ContactMe /> */}
    </div>
  );
};

export default App;
