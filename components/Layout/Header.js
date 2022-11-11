import Image from "next/image";
// import Link from "next/link";
import useScroll from "../../hooks/useScroll";
import { navLinks } from "./navLinks";
import BlueVoyage from "../../public/images/logo/blue-voyage-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { AnimatePresence } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [toggle, setToggle] = useState(false);
  // const [activeBorder, setActiveBorder] = useState(false);

  const { scroll } = useScroll();

  // return (
  //   <div className="fixed w-full z-10 bg-white">
  //     <div className="container p-4 flex justify-center gap-10 text-lg text-black">
  //       <Link
  //         activeClass="font-bold"
  //         to="banner"
  //         spy={true}
  //         smooth={true}
  //         // offset={2}
  //         duration={200}
  //       >
  //         Home
  //       </Link>
  //       <Link
  //         activeClass="font-bold"
  //         to="about-us"
  //         spy={true}
  //         smooth={true}
  //         offset={-200}
  //         duration={200}
  //       >
  //         About Us
  //       </Link>
  //       {/* <Link href="/">Home</Link>
  //       <Link href="/#about-us" passHref>
  //         About Us
  //       </Link> */}
  //     </div>
  //   </div>
  // );

  return (
    <div
      className={`fixed z-10 w-full border-b transition-all duration-300 ${
        scroll
          ? "bg-white text-custom-gray shadow"
          : "bg-transparent text-white border-gray-500 "
      }`}
    >
      <div className="container py-4 flex justify-between items-center">
        {/* <Link href="/">
          <div className="w-[80px]">
            <Image src={BlueHorizonsLogo} alt="ahm blue horizons logo" />
          </div>
        </Link> */}

        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          <div className="w-[150px]">
            <Image src={BlueVoyage} alt="blue voyage logo" />
          </div>
        </Link>

        <div className="hidden lg:flex gap-10 text-sm font-semibold tracking-wider uppercase">
          {navLinks.map((navLink, i) => (
            <div key={i} className="">
              <Link
                className="cursor-pointer transition-all duration-300"
                activeClass="active"
                to={navLink.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                // onSetActive={() => setActiveBorder(i)}
                // onSetInactive={() => setActiveBorder(false)}
              >
                {navLink.name}
              </Link>
              {/* <div
                className={`h-[2px] transition-all duration-300 ${
                  activeBorder === i ? "bg-custom-blue" : "bg-transparent"
                } `}
              ></div> */}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-xl text-custom-blue"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {toggle && (
          <Dropdown
            navLinks={navLinks}
            closeDropdown={() => setToggle(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
