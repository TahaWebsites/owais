import React, { useState, useEffect, useRef } from "react";
import resume from "../assets/resume.pdf";

function Overlay({ scrollValue }) {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const nav = useRef(null);

  // Update windowWidth on resize
  useEffect(() => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the visibility of the nav (mobile menu)
  const navHandler = (e) => {
    e.preventDefault();
    setIsVisible(prev => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nav.current && !nav.current.contains(e.target) && 
          e.target.id !== 'burger' && !e.target.closest('#burger')) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="bg-transparent fixed h-screen w-screen flex flex-col pb-20 lg:px-20 px-10 pt-10 pointer-events-none z-20">
      {/* Navbar */}
      <div
        className={`navbar flex justify-between items-center px-5 py-3 transition-all duration-300
          ${
            scrollValue > 0
              ? "bg-[rgba(0,0,0,0.5)] backdrop-blur-md rounded-xl"
              : "bg-transparent"
          }`}
        style={{ pointerEvents: "auto" }}
      >
        <a className={`font-bold ${scrollValue > 0 ? "text-red-500" : "text-white"}`} href={resume} download="resume.pdf">
          Mohammed Owais Khan
        </a>

        {/* Burger Icon for Mobile */}
        <div id="burger" className="lg:hidden z-30 cursor-pointer" onClick={navHandler} style={{ pointerEvents: "auto" }}>
          <div className={`w-[45px] h-[7px] rounded mt-[5px] transition-all ${isVisible ? 'bg-black rotate-45 translate-y-[12px]' : (scrollValue > 0 ? 'bg-red-500' : 'bg-white')}`}></div>
          <div className={`w-[45px] h-[7px] rounded mt-[5px] ${isVisible ? 'opacity-0' : (scrollValue > 0 ? 'bg-red-500' : 'bg-white')}`}></div>
          <div className={`w-[45px] h-[7px] rounded mt-[5px] transition-all ${isVisible ? 'bg-black -rotate-45 -translate-y-[12px]' : (scrollValue > 0 ? 'bg-red-500' : 'bg-white')}`}></div>
        </div>

        {/* Desktop Menu */}
        {windowWidth >= 1024 && (
          <ul className="hidden lg:flex gap-10 text-lg">
            <li>
              <a href="#lander" className={scrollValue > 0 ? "text-red-500" : "text-white"}>Home</a>
            </li>
            <li>
              <a href="#about" className={scrollValue > 0 ? "text-red-500" : "text-white"}>Resume</a>
            </li>
            <li>
              <a href="#projects" className={scrollValue > 0 ? "text-red-500" : "text-white"}>Works</a>
            </li>
            <li>
              <a href="#contact" className={scrollValue > 0 ? "text-red-500" : "text-white"}>Contact</a>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Menu */}
      {isVisible && windowWidth < 1024 && (
        <ul
          className="fixed top-0 left-0 bg-white text-black w-full h-screen flex flex-col items-center justify-center z-20 pt-20"
          ref={nav}
          style={{ pointerEvents: "auto" }}
        >
          <li className="w-full h-full flex justify-center items-center hover:bg-gray-100">
            <a href="#lander" onClick={navHandler} className="text-2xl w-full h-full flex items-center justify-center">Home</a>
          </li>
          <li className="w-full h-full flex justify-center items-center hover:bg-gray-100">
            <a href="#about" onClick={navHandler} className="text-2xl w-full h-full flex items-center justify-center">Resume</a>
          </li>
          <li className="w-full h-full flex justify-center items-center hover:bg-gray-100">
            <a href="#projects" onClick={navHandler} className="text-2xl w-full h-full flex items-center justify-center">Works</a>
          </li>
          <li className="w-full h-full flex justify-center items-center hover:bg-gray-100">
            <a href="#contact" onClick={navHandler} className="text-2xl w-full h-full flex items-center justify-center">Contact</a>
          </li>
        </ul>
      )}

      {/* Bottom bar */}
      <div
        className={`bottombar lg:flex w-full hidden justify-between absolute bottom-[4rem] pr-40 ${
          scrollValue > 0 ? "text-red-500" : "text-white"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <div className="contactsText">
          <p>E: mohammadowaiskhan84@gmail.com</p>
          <p>M: +91 760 102 6730</p>
        </div>
        <div className="socialsText flex items-center">
          <div
            className={`whiteBar w-[90px] h-[5px] ${
              scrollValue > 0 ? "bg-red-500" : "bg-white"
            }`}
          ></div>
          <div className="socialsTextIcons">
            <a href="https://www.github.com/Owais84" target="_blank"><i className="fa-brands fa-github ml-5"></i></a>
            <a href="http://www.linkedin.com/in/mohammad-owais-khan-devops/" target="_blank"><i className="fa-brands fa-linkedin ml-5"></i></a>
            <a href="mailto:mohammadowaiskhan84@gmail.com"><i className="fa-solid fa-envelope ml-5"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;