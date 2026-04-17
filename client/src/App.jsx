import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import Lotus from "./components/canvas/Lotus";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Experiance from "./sections/Experiance";
import { setHidden } from "../redux/animationSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.animations.hidden);

  const scrollContainer = useRef();
  const { scrollY } = useScroll();

  const prevScroll = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    console.log(current);
    if (current <= 150) {
      dispatch(setHidden(true));
    } else if (current > 150 && current < previous) {
      dispatch(setHidden(false));
    } else if (current > previous && current > 150) {
      dispatch(setHidden(true));
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
