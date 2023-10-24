"use client";
import { useEffect } from "react";
import Services from "../components/ServicesOffered";
import AOS from "aos";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return <Services />;
}
