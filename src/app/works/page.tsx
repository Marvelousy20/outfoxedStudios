"use client";
import { useState } from "react";
import Image from "next/image";
import Title from "../components/Title";
import brandVideo from "../../../public/images/brandVideo.png";
import brandVideo2 from "../../../public/images/brand2.png";
import Moon2 from "../../../public/images/Moon2.svg";
// import Link from "next/link";
import ContactCard from "../components/ContactCard";
import { works } from "../components/data";

export default function Work() {
  const [selected, setSelected] = useState(works[0].title);

  return (
    <div className="bg-background px-4 xl:px-0 py-16 md:py-28 lg:py-32 text-white">
      <div className="as absolute inset-0 isolate aspect-[1.5] bg-background">
        <Image
          src={Moon2}
          alt=""
          className="absolute top-0 z-10 object-cover opacity-10"
          priority
        />
        <div className="bg-blend-hard-light mix-blend-hard absolute inset-0 bg-gradient-to-b from-[rgba(13,22,27,0.30)] to-[rgba(13,22,27,0.30)]" />
      </div>
      <div className="text-white max-w-xl mx-auto text-start md:text-center relative z-10">
        <Title title="Portfolio" />
        <h3 className="text-5xl lg:text-7xl font-bold mb-4">Our Works</h3>
        <p className="text-offwhite">Checkout our works and be convinced!</p>
      </div>
      <div className="relative z-10 mt-10 flex flex-col items-center gap-y-12">
        <div className="tabs mt-6 relative">
          {works.map((work, index) => (
            <div key={index}>
              <div
                className={`tab tab-bordered text-sm md:text-xl lg:text-3xl py-10 md:py-16 xl:py-20 ${
                  selected === work.title
                    ? "tab-active text-primary-main !border-b-primary-main"
                    : ""
                }`}
                onClick={() => setSelected(work.title)}
              >
                {work.title}
              </div>
            </div>
          ))}
        </div>
        {works.map((work, index) => (
          <div
            key={index}
            className={`w-full ${
              selected === work.title
                ? "grid grid-cols-1 md:grid-cols-2 gap-12"
                : "hidden"
            }`}
          >
            {work.data.map((data, i) => (
              <div key={i} className="">
                <div>
                  <Image
                    src={data.img}
                    alt="img"
                    width="608"
                    height="400"
                    placeholder="blur"
                    priority
                    className="rounded-lg"
                  />
                  <h3 className="text-offwhite text-xl md:text-3xl font-semibold leading-relaxed">
                    {data.course}
                  </h3>
                  <p className="text-offwhite md:text-lg font-normal leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* conquer section */}
      <ContactCard text="Conquer the content world and make your mark in your industry!" />
    </div>
  );
}
