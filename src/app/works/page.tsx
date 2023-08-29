"use client";
import { useState } from "react";
import Image from "next/image";
import Title from "../components/Title";
import brandVideo from "../../../public/images/brandVideo.png";
import brandVideo2 from "../../../public/images/brand2.png";
import Moon2 from "../../../public/images/Moon2.svg";
// import Link from "next/link";
import ContactCard from "../components/ContactCard";

const data = [
  {
    title: "Video Editing",
    data: [
      {
        course: "Tyler Branding Video",
        description: "Video 1",
        img: brandVideo,
      },

      {
        course: "Mac Branding Video",
        description: "Video 2",
        img: brandVideo2,
      },
      {
        course: "Mac Branding Video",
        description: "Video 2",
        img: brandVideo2,
      },
      {
        course: "Mac Branding Video",
        description: "Video 2",
        img: brandVideo,
      },
      {
        course: "Mac Branding Video",
        description: "Video 2",
        img: brandVideo2,
      },
      {
        course: "Mac Branding Video",
        description: "Video 2",
        img: brandVideo,
      },
    ],
  },

  {
    title: "Graphic Design",
    data: [
      {
        course: "Tyler Graphic Design",
        description: "Video 1",
        img: brandVideo2,
      },

      {
        course: "Mac Graphic Design",
        description: "Video 2",
        img: brandVideo,
      },
    ],
  },

  {
    title: "Animation",
    data: [
      {
        course: "Tyler Animation Video",
        description: "Video 1",
        img: brandVideo,
      },

      {
        course: "Mac Video",
        description: "Video 2",
        img: brandVideo2,
      },

      {
        course: "Mac Video",
        description: "Video 3",
        img: brandVideo2,
      },
    ],
  },
];

export default function Work() {
  const [selected, setSelected] = useState(data[0].title);

  return (
    <div className="bg-background py-32 lg:px-20 text-white">
      <div className="as absolute inset-0 isolate aspect-[1.5]">
        <Image
          src={Moon2}
          alt=""
          className="absolute top-0-z-10 object-cover bg-neutral-900"
          priority
        />
        <div className="bg-blend-hard-light mix-blend-hard absolute inset-0 bg-gradient-to-b from-[rgba(13,22,27,0.30)] to-[rgba(13,22,27,0.30)]" />
      </div>
      <div className="text-white max-w-xl mx-auto text-center relative z-10">
        <Title title="Portfolio" />
        <h3 className="lg:text-7xl font-bold mb-4">Our Works</h3>
        <p className="text-offwhite">Checkout our works and be convinced!</p>
      </div>
      <div className="relative z-10 mt-10 flex flex-col items-center gap-y-12">
        <div className="tabs mt-6 relative">
          {data.map((work, index) => (
            <div key={index}>
              <div
                className={`tab tab-bordered text-3xl font-semibold py-20 border-b leading-relaxed ${
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
        {data.map((work, index) => (
          <div
            key={index}
            className={`w-full ${
              selected === work.title ? "grid grid-cols-2 gap-12" : "hidden"
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
                  <h3 className="text-offwhite text-3xl font-semibold leading-relaxed">
                    {data.course}
                  </h3>
                  <p className="text-offwhite text-lg font-normal leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* conquer section */}
      {/* <div className="max-w-4xl text-white text-center z-10 mx-auto lg:mt-44 bg-card bg-opacity-75 rounded-3xl backdrop-blur-xl lg:px-28 lg:py-24">
        <Title title="Contact us" />
        <h3 className="text-center text-4xl font-bold mb-2">
          Conquer the content world and make your mark in your industry!
        </h3>
        <p className="text-lg font-normal leading-relaxed text-offwhite">
          let us tailor a content solution that propels you towards success.
        </p>

        <Link
          href="/"
          className="inline-flex gap-2 bg-primary-main px- py-3 rounded-lg mt-4 px-6 items-center hover:bg-opacity-75 ease-in-out transition-all duration-300"
        >
          <span>Let&apos;s talk</span>
          <div className="w-3.5 h-px border border-white"></div>
          <span>contents</span>
          <Image src="/images/blast2.png" alt="blast2" width="26" height="26" />
        </Link>
      </div> */}
      <ContactCard text="Conquer the content world and make your mark in your industry!" />
    </div>
  );
}
