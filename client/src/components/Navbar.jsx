import { motion } from "motion/react";
import { setSearch } from "../redux/animationSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ hidden }) => {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.animations);
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
          <div className="vintage flex items-center justify-between bg-base-200 w-full rounded-md h-24 max-lg:collapse lg:mb-48">
            <input
              id="navbar-1-toggle"
              className="peer hidden"
              type="checkbox"
            />
            <label
              htmlFor="navbar-1-toggle"
              className="absolute inset-0 hidden max-lg:peer-checked:block"
            ></label>
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
                <input
                  value={search}
                  onChange={(e) => dispatch(setSearch(e.target.value))}
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-64 lg:w-auto"
                />
              </div>
            </div>
            <div className="collapse-content lg:hidden absolute top-20 left-0 bg-base-100 rounded-xl overflow-visible z-100">
              <ul className="menu px-1 text-xl gap-5">
                <li>
                  <button className="hover:text-secondary">
                    <a href="#morgan">Morgan</a>
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
