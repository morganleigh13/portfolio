import { motion } from "motion/react";

const Navbar = ({ hidden }) => {
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
        <div className="vintage flex items-center justify-between bg-base-200 w-full rounded-md">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label
            htmlFor="navbar-1-toggle"
            className="fixed inset-0 hidden max-lg:peer-checked:block"
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
              <div htmlFor="button" className="btn btn-ghost text-3xl hover:text-primary">
                <a href="lotus">Morgan</a>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-xl gap-3">
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
              </ul>
            </div>
            <div className="navbar-end">
              <input
                type="text"
                placeholder="Search My Page"
                className="input input-bordered w-64 lg:w-auto"
              />
            </div>
          </div>

          <div className="collapse-content lg:hidden z-1">
            <ul className="menu">
              <li>
                <button>Item 1</button>
              </li>
              <li>
                <button>Parent</button>
                <ul>
                  <li>
                    <button>Submenu 1</button>
                  </li>
                  <li>
                    <button>Submenu 2</button>
                  </li>
                </ul>
              </li>
              <li>
                <button>Item 3</button>
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
