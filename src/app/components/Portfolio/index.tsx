"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "../Title";
import brandVideo from "../../../../public/images/brandVideo.png";
import brandVideo2 from "../../../../public/images/brand2.png";
import Background2 from "../../../../public/images/bacground2.png";
import Mentorship from "../Mentorship";
import Accomplishment from "../Accomplishment";

const works = [
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
        img: brandVideo2,
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
        img: brandVideo,
      },

      {
        course: "Mac Video",
        description: "Video 3",
        img: brandVideo,
      },
    ],
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(works[0].title);

  return (
    <div className="lg:px-24 lg:py-40 relative">
      <div>
        <Title title="Portfolio" />
        <h3 className="text-5xl font-bold">Some of my works</h3>
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-normal leading-relaxed mb-10">
          Choose category here
        </h3>
        <div className="tabs mt-6 relative">
          {works.map((work, index) => (
            <div key={index}>
              <a
                className={`tab tab-bordered ${
                  selected === work.title
                    ? "tab-active text-primary-main !border-b-primary-main"
                    : ""
                }`}
                onClick={() => setSelected(work.title)}
              >
                {work.title}
              </a>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-10">
          {works.map((work, index) => (
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

        <div className="flex items-center justify-center mt-6 !z-20">
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary-main px-6 py-3 rounded-lg hover:opacity-75 ease-in-out transition-all duration-300"
          >
            <span>More Works</span>
            <Image
              src="/images/blast2.png"
              alt="blast2"
              width="26"
              height="26"
            />
          </Link>
        </div>

        <Mentorship />
        <Accomplishment />
      </div>

      <div className="z-10">
        <Image
          src={Background2}
          alt="background"
          width="1440"
          height="1140"
          placeholder="blur"
          priority
          className="absolute left-0 right-0 !top-80 isolate prose"
        />
      </div>
    </div>
  );
}
