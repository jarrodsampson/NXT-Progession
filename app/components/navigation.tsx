"use client";

import { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [isScrollingUp, setIsScrollingUp] = useState<boolean | null>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    if (typeof window !== "undefined") {
      setPrevScrollPos(window.pageYOffset || document.documentElement.scrollTop);
      window.addEventListener("scroll", handleScroll);

      // Remove the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`bg-gray-800 p-4 fixed w-full top-0 z-50 ${
          isScrollingUp
            ? "transition-all duration-300 ease-in"
            : "transition-all duration-300 ease-out transform -translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">NXT Progression</div>
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
