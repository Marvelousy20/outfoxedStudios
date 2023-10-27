"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/ServicesOffered";
import Portfolio from "./components/Portfolio";
import Trustees from "./components/Trustees";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main className="text-white bg-background">
      <Hero />
      {/* <Services /> */}
      <Portfolio />
      <Trustees />
    </main>
  );
}
