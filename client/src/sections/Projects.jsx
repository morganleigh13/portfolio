import { myProjects } from "../data/index";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/canvas/DemoComputer";

const projectCount = myProjects.length;

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const currentProject = myProjects[projectIndex];
  const IconComponent = myProjects[projectIndex].logo;

  const handleNavigation = (direction) => {
    setProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="projects" className="sm:px-10 px-5 bg-base-300">
      <p className="sm:text-4xl text-3xl font-semibold text-neutral-content p-2">My Work</p>

      <div
        className="grid lg:grid-cols-2
grid-cols-1 mt-12 gap-5 w-full"
      >
        <div
          className="flex flex-col gap-5
relative sm:p-10 py-10 px-5 shadow-2xl
shadow-black-200"
        >
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-2 backdrop-filter backdrop-blur-3xl w-fit rounded-lg items-center flex flex-col"
            style={currentProject.logoStyle}
          >
            <IconComponent
              alt="logo"
              className="shadow-sm lg:hover:scale-120 size-10 rounded-lg text-blue-300"
            />
          </div>
          <div className="flex flex-col gap-5 text-white my-5">
            <p className="metal text-white text-2xl font-semibold animatedText p-1 ">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, i) => (
                <div className="rounded-md p-2 flex justify-center items-center" key={i}>
                  <img src={tag.path} alt={tag.name} className="size-20" />
                </div>
              ))}
            </div>
            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 items-baseline"
            >
              <p className="text-white metal text-xl">Go To gitLab Repo</p>
              <img src="/assets/arrow-up.png" alt="arrow" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="size-4"
              />
            </button>
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="size-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black bg-black rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
