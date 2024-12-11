import react from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" rounded-b-lg w-full fixed z-20 top-0 mb-9 bg-gradient-to-r from-slate-500 to-slate-800  border-gray-200  px-7  ">
        <div className="  flex flex-wrap justify-between items-center ">
          <Link to="/" className="flex items-center ">
            <span className="text-white text-xl  font-HeadFont ">
              Portfolio website
            </span>
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0  ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `  py-7 cursor-pointer
                  transition-all duration-200 
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group hidden lg:block`
                  }
                >
                  Home
                  <div
                    className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block
           transition-all duration-200 rounded-sm"
                  ></div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    ` font-mullish py-7 cursor-pointer
                  transition-all duration-200
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group hidden lg:block`
                  }
                >
                  About
                  <div
                    className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block
           transition-all duration-200 rounded-sm"
                  ></div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Resume"
                  className={({ isActive }) =>
                    ` font-mullish py-7 cursor-pointer
                  transition-all duration-200
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group hidden lg:block`
                  }
                >
                  Resume
                  <div
                    className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block
           transition-all duration-200 rounded-sm"
                  ></div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    ` font-mullish py-7 cursor-pointer
                  transition-all duration-200
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group hidden lg:block`
                  }
                >
                  Contact
                  <div
                    className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block
           transition-all duration-200 rounded-sm"
                  ></div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Message_me"
                  className={({ isActive }) =>
                    ` font-mullish py-7 cursor-pointer 
                  transition-all duration-200
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group hidden lg:block`
                  }
                >
                  Message me
                  <div
                    className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block
           transition-all duration-200 rounded-sm"
                  ></div>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className=" py-5 lg:hidden  ">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <ul className="mt-4 flex flex-col space-y-2 mb-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` px-7 cursor-pointer
                  transition-all duration-200 
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group  lg:block`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    ` px-7  cursor-pointer
                  transition-all duration-200 
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group  lg:block`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Resume"
                  className={({ isActive }) =>
                    ` px-7  cursor-pointer
                  transition-all duration-200 
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group  lg:block`
                  }
                >
                  Resume
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contect"
                  className={({ isActive }) =>
                    ` px-7  cursor-pointer
                  transition-all duration-200 
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group  lg:block`
                  }
                >
                  Contect
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Message_me"
                  className={({ isActive }) =>
                    ` px-7  cursor-pointer 
                  transition-all duration-200 
                  ${isActive ? "text-blue-500" : "text-white"} 
                  relative group  lg:block`
                  }
                >
                  Message me
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
