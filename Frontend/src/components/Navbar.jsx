import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiLinkfire } from "react-icons/si";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        {/* <div className="logo">
       <SiLinkfire size={40} color="#ebeb3eff" />
       
        <span className="text-[#007bff] font-bold text-lg sm:text-xl cursor-pointer hover:text-blue-600 transition">
  CareerLink
</span>

        </div> */}
   <div className="logo">

  <SiLinkfire size={40} color="#ebeb3eff" />
  <span className="text-black  font-bold text-lg sm:text-xl cursor-pointer hover:text-blue-600 transition tracking-wide">
    CareerLink
  </span>
</div>


        <div className="links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setShow(!show)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} onClick={() => setShow(!show)}>
                JOBS
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to={"/dashboard"} onClick={() => setShow(!show)}>
                  DASHBOARD
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/login"} onClick={() => setShow(!show)}>
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;