"use client";
import { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 z-50 right-4 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      >
        <BsFillArrowUpSquareFill
          size={42}
          //   color="white"
          className="text-primary50 hover:opacity-50 dur transition-all ease-linear"
        />
      </button>
    </div>
  );
}
