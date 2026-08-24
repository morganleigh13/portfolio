import { motion } from "motion/react";
import { setSearch, setSearchActive } from "../redux/animationSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ hidden }) => {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.animations);
  const scrollToProjects = () => {
    dispatch(setSearchActive(true));
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const clearSearch = () => dispatch(setSearch(""));

  return (
    <>
      {!hidden && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-100"
          animate={{
            y: hidden ? -140 : 0,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="vintage relative flex h-24 w-full items-center justify-between rounded-md bg-base-200 lg:mb-48">
            <input
              id="navbar-1-toggle"
              className="peer hidden"
              type="checkbox"
            />
            <div className="collapse-title navbar">
              <div className="navbar-start">
                <label
                  htmlFor="navbar-1-toggle"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <div
                  htmlFor="button"
                  className="btn btn-ghost text-3xl hover:text-primary"
                >
                  <a href="lotus">Morgan</a>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-5">
                  <li>
                    <button className="hover:text-secondary">
                      <a href="#frameworks">Frameworks</a>
                    </button>
                  </li>
                  <li>
                    <button className="hover:text-secondary">
                      <a href="#projects">Projects</a>
                    </button>
                  </li>
                  <li>
                    <button className="hover:text-secondary">
                      <a href="#experiance">Experiance</a>
                    </button>
                  </li>

                  <li>
                    <button className="hover:text-secondary">
                      <a href="#contact">Contact Me</a>
                    </button>
                  </li>

                  <li>
                    <button className="flower-button flex items-center justify-center bg-transparent border-0 border-base-200 cursor-pointer">
                      <a href="./src/assets/online-resume.pdf" target="_blank">
                        <div className="relative bg-transparent flex justify-center items-center">
                          <p className="bg-sky-200 opacity-75 transition-all duration-500 ease-in rounded-lg z-1 text-black text-lg tracking-wider px-.5">
                            View Resume
                          </p>
                          <div className="flower flower1">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                          </div>
                          <div className="flower flower2">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                          </div>
                          <div className="flower flower3">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                          </div>
                          <div className="flower flower4">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                          </div>
                          <div className="flower flower5">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                          </div>
                          <div className="flower flower6">
                            <div className="petal one"></div>
                            <div className="petal two"></div>
                            <div className="petal three"></div>
                            <div className="petal four"></div>
                          </div>
                        </div>
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="navbar-end">
                <div
                  className="tooltip tooltip-bottom relative"
                  data-tip="Filters Personal Projects and Work Experience only"
                  title="Filters Personal Projects and Work Experience only"
                >
                  <input
                    value={search}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    onFocus={scrollToProjects}
                    onClick={scrollToProjects}
                    onBlur={() => dispatch(setSearchActive(false))}
                    type="text"
                    placeholder="Search"
                    aria-label="Search personal projects and work experience"
                    className="input input-bordered w-32 pr-9 sm:w-48 lg:w-64"
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="btn btn-ghost btn-xs absolute right-2 top-1/2 -translate-y-1/2 rounded-full text-lg"
                      aria-label="Clear project and work experience filters"
                      title="Clear filters"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute left-3 right-3 top-full w-fit z-[110] mt-2 hidden rounded-xl bg-base-100 p-3 shadow-2xl peer-checked:flex lg:hidden">
              <ul className="menu w-fit gap-2 px-1 text-xl">
                <li>
                  <button className="hover:text-secondary">
                    <a href="#lotus">Morgan</a>
                  </button>
                </li>
                <li>
                  <button className="hover:text-secondary">
                    <a href="#frameworks">Frameworks</a>
                  </button>
                </li>
                <li>
                  <button className="hover:text-secondary">
                    <a href="#projects">Projects</a>
                  </button>
                </li>
                <li>
                  <button className="hover:text-secondary">
                    <a href="#experiance">Experiance</a>
                  </button>
                </li>

                <li>
                  <button className="hover:text-secondary">
                    <a href="#contact">Contact Me</a>
                  </button>
                </li>
                <li>
                  <button className="flower-button flex items-center justify-center bg-transparent border-0 border-base-200 cursor-pointer">
                    <a href="./src/assets/Resume.docx" download="Resume">
                      View Resume
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </motion.header>
      )}
    </>
  );
};

export default Navbar;
