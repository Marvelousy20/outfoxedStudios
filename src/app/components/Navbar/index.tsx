"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y) >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav className="bg-transparent h-[110px] px-24 text-lg text-white z-20 sticky top-0">
      <ul
        className={`${
          isScrolled ? "bg-background" : "bg-transparent"
        } flex items-center space-x-12 h-full px-12`}
      >
        <li>
          <Image src="/images/logo.png" alt="logo" width="156" height="62" />
        </li>
        <li className="grow"></li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
