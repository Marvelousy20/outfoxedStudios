"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMediaQuery } from "@/app/utils/useMediaQuery";
import { motion } from "framer-motion";

// Parent
const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },

  hidden: {
    opacity: 0,
  },
};

// Child
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y) >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // large screen sizes uses default
  const matches = useMediaQuery("(min-width: 1024px)");

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);

    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={` ${
        isScrolled ? "bg-background" : "bg-transparent"
      } h-[110px] px-8 md:px-16 lg:px-24 text-lg text-white z-20 sticky top-0 flex items-center justify-between`}
    >
      <div className="z-20">
        <a href="/" className="font-bold text-2xl md:text-3xl">
          <span className="font-sans">Outfoxed</span>
          <span className="text-primary-main">Productions</span>
        </a>
      </div>
      {matches && (
        <ul className={`flex items-center space-x-12 h-full px-12`}>
          <li className="grow"></li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      )}

      {!matches && (
        <div
          className="space-y-1.5 cursor-pointer z-10"
          onClick={() => setToggled((prevState) => !prevState)}
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-white"
          ></motion.span>
          <motion.span
            animate={{
              width: toggled ? 0 : 24,
            }}
            className="block h-0.5 w-6 bg-white"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-white"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.ul
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="flex flex-col items-center justify-center space-y-12 w-full fixed top-0 left-0 h-screen bg-background text-white"
        >
          <motion.li variants={itemMotion} onClick={() => setToggled(false)}>
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li variants={itemMotion} onClick={() => setToggled(false)}>
            <Link href="/#services">Services</Link>
          </motion.li>
          <motion.li variants={itemMotion} onClick={() => setToggled(false)}>
            <Link href="/about">About</Link>
          </motion.li>
          <motion.li variants={itemMotion} onClick={() => setToggled(false)}>
            <Link href="/works">Works</Link>
          </motion.li>
          <motion.li variants={itemMotion} onClick={() => setToggled(false)}>
            <Link href="/contact">Contact Us</Link>
          </motion.li>
        </motion.ul>
      )}
    </nav>
  );
}
