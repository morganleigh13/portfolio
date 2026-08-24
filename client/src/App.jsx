import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import Lotus from "./components/canvas/Lotus";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Experiance from "./sections/Experiance";
import Frameworks from "./sections/Frameworks";
import { setHidden } from "./redux/animationSlice";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { hidden, isSearchActive } = useSelector((state) => state.animations);

  const scrollContainer = useRef();
  const { scrollY } = useScroll();

  const prevScroll = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (isSearchActive) {
      dispatch(setHidden(false));
      return;
    }

    const previous = scrollY.getPrevious() ?? 0;
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
      <Toaster
        containerStyle={{
          top: 70,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          // Define default options
          className: "",
          duration: 6000,
          removeDelay: 1000,

          // Default options for specific types
          success: {
            icon: "🎉",
            className:
              "text-lg text-success-content font-extrabold tracking-wider",
            style: {
              border: "4px solid green",
              backgroundColor: "var(--color-success)",
            },
          },
          error: {
            duration: 7000,
            icon: "💥👎",
            className:
              "text-lg text-error-content font-extrabold tracking-wider",
            style: {
              border: "4px solid red",
              backgroundColor: "var(--color-error)",
            },
          },
        }}
      />
      <Navbar hidden={hidden && !isSearchActive} />
      <div className="bg-base-300">
        <Lotus />
        <Frameworks />
        <Projects />
        <Experiance />
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
