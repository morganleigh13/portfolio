import gsap from "gsap";
import { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/canvas/DemoComputer";
import { useSelector } from "react-redux";
import { myProjects } from "../data/index";

const projectCount = myProjects.length;

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [modelInteraction, setModelInteraction] = useState(false);
  const { search } = useSelector((state) => state.animations);
  // below lg the two columns stack, so the laptop sits directly under the text
  const isStacked = useMediaQuery({ maxWidth: 1023 });

  const groupRef = useRef();
  const filteredProjects = myProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.desc.toLowerCase().includes(search.toLowerCase()) ||
      project.subdesc.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some(
        (tag) => tag.name.toLowerCase() === search.toLowerCase()
      )
  );

  const currentProject = filteredProjects[projectIndex];
  const IconComponent = filteredProjects[projectIndex]?.logo;

  const handleNavigation = (direction) => {
    setProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [projectIndex]);

  return (
    <>
      {currentProject ? (
        <section
          id="projects"
          className="sm:px-10 p-5 bg-base-300 vintage pt-3 projects-background "
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full ">
            <div
              className="flex flex-col gap-5 h-full
relative sm:p-10 py-10 px-5 shadow-2xl
shadow-black"
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

              <div className="flex flex-col gap-5 tracking-wider my-5">
                <p className="text-3xl text-info font-semibold animatedText p-1 ">
                  {currentProject.title}
                </p>
                <p className="animatedText text-2xl mx-2 indent-3">
                  {currentProject.desc}
                </p>
                <p className="animatedText  text-info-content text-2xl indent-4">
                  {currentProject.subdesc}
                </p>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  {currentProject.tags.map((tag, i) => (
                    <div
                      className="rounded-md p-2 flex justify-center items-center"
                      key={i}
                    >
                      <img src={tag.path} alt={tag.name} className="size-8" />
                    </div>
                  ))}
                </div>
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 items-baseline justify-end"
                >
                  <p className="text-info contrast-200 text-xl">
                  gitHub Repo
                  </p>
                  <img className="w-1/10" src="/assets/share-solid-full.svg" alt="arrow" />
                </a>
              </div>
              <div className="flex justify-between items-center mt-auto pt-7 tracking-wider">
                <button
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient animate-pulse ease-in-out"
                  onClick={() => handleNavigation("previous")}
                >
                  <img
                    src="/assets/left-arrow.png"
                    alt="left-arrow"
                    className="size-6"
                  />
                  previous
                </button>
                <button
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient animate-pulse ease-in-out"
                  onClick={() => handleNavigation("next")}
                >
                  next
                  <img
                    src="/assets/right-arrow.png"
                    alt="right-arrow"
                    className="size-6"
                  />
                </button>
              </div>
            </div>
            <div className="relative border border-secondary/60 shadow-[5px_4px_6px_var(--color-secondary)] bg-base-300 rounded-lg h-96 md:h-full">
              {isStacked && (
                <button
                  type="button"
                  className="absolute top-3 right-3 z-10 border rounded-xl px-2 vintage tracking-widest text-secondary bg-base-300/80"
                  onClick={() => setModelInteraction((prev) => !prev)}
                >
                  {modelInteraction ? "Stop Interaction" : "Start Interaction"}
                </button>
              )}
              <Canvas>
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 5]} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    {/* Position is zooming laptop in and out */}
                    <group
                      scale={.2}
                      position={[0, 0, 0]}
                      rotation={[-1.5, -.09, 0]}
                    >
                      <DemoComputer texture={currentProject.texture} />
                    </group>
                  </Suspense>
                </Center>
                <PerspectiveCamera
                  makeDefault
                  fov={45} // a normal human‑eye FOV
                  aspect={window.innerWidth / window.innerHeight}
                  position={[0, 1.5, 0]}
                />
                <OrbitControls
                  enableZoom={!isStacked || modelInteraction}
                  enablePan={false}
                  enableRotate={false}
                  minDistance={2.35}
                  maxDistance={2.7}
                  target={[-0.003, -1, -0.07]}
                  
                />
              </Canvas>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-5xl flex justify-center vintage py-10 animate-pulse text-warning ">
          <p>There are no current projects that meet that search criteria.</p>
        </div>
      )}
    </>
  );
};

export default Projects;
