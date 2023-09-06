"use client";

import Image from "next/image";
import { useState } from "react";
import Title from "../Title";
import MobileService from "./mobileServeice";

const services = [
  {
    title: "Youtube Services",
    number: "01",
    servicesRendered: [
      {
        img: "/images/videoEditing.png",
        name: "Video Editing",
        variaties: ["Short", "full length"],
      },
      {
        img: "/images/consulting.png",
        name: "Consulting & Coaching",
        variaties: ["Content Ideation", "Content Strategy"],
      },
      {
        img: "/images/graphicdesign.png",
        name: "Graphics Design",
        variaties: ["thumbnails", "Banners", "logo", "merchandise"],
      },
      {
        img: "/images/animation.png",
        name: "3d Animation",
        variaties: ["short", "Full lenght"],
      },
    ],
  },

  {
    title: "Tiktok Services",
    number: "02",
    servicesRendered: [
      {
        img: "/images/videoEditing.png",
        name: "Video Editing",
        variaties: ["Short", "full length"],
      },
      {
        img: "/images/consulting.png",
        name: "Consulting & Coaching",
        variaties: ["Content Ideation", "Content Strategy"],
      },
    ],
  },
  {
    title: "Streaming Services",
    number: "03",
    servicesRendered: [
      {
        img: "/images/consulting.png",
        name: "Consulting & Coaching",
        variaties: ["Content Ideation", "Content Strategy"],
      },
      {
        img: "/images/graphicdesign.png",
        name: "Graphics Design",
        variaties: ["thumbnails", "Banners", "logo", "merchandise"],
      },
      {
        img: "/images/animation.png",
        name: "3d Animation",
        variaties: ["short", "Full lenght"],
      },
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(services[0].title);
  return (
    <div className="pt-20 lg:pt-44 lg:px-28 px-4" id="services">
      <div className="text-start md:text-center">
        <Title title="How I help you" />
        <div className="inline-flex">
          <h3 className="text-3xl md:text-5xl md:leading-[65px] font-bold">
            Services I Offer
          </h3>
        </div>

        <div className="text-offwhite text-base md:text-lg font-normal leading-relaxed">
          <div className="relative inline-block">
            <div>Your one stop shop for all things content creation</div>
            <div className="absolute right-0 md:-right-16 top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <path
                  d="M82.5 44C78.43 44 72.3397 48.0333 67.2247 52.1107C60.6393 57.3613 54.8863 63.6277 50.4937 70.818C47.2047 76.2043 44.0477 82.7457 44.0477 88M5.5 44C9.57 44 15.6603 48.0333 20.7753 52.1107C27.3607 57.3613 33.1137 63.6277 37.5063 70.818C40.7953 76.2043 43.9523 82.7457 43.9523 88M44 88L44 -1.90735e-06"
                  stroke="#7DD2FF"
                  stroke-width="4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block mt-20">
        <div className="grid grid-cols-5 gap-x-20">
          <div className="col-span-2 tabs items-start flex-col text-start space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`tab pb-20 font-bold space-x-2 ${
                  selected === service.title
                    ? "border-b text-primary-main border-primary-main"
                    : ""
                }`}
                onClick={() => setSelected(service.title)}
              >
                <div className="text-4xl">{service.number}.</div>
                <div className="text-3xl whitespace-nowrap">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  selected === service.title
                    ? "grid grid-cols-2 gap-12"
                    : "hidden"
                }`}
              >
                {service.servicesRendered.map((s, index) => (
                  <div key={index}>
                    <div className="mb-4">
                      <Image src={s.img} alt="video" width="40" height="40" />
                      <p className="text-2xl font-semibold leading-relaxed">
                        {s.name}
                      </p>
                      <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
                        {s.variaties.map((variety) => (
                          <div key={index}>
                            <span>- {variety}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href="/contact"
                        className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300"
                      >
                        Hire me
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-4 items-center mt-20 gap-x-10 hidden">
        {/* first section */}
        {/* <div className="col-span-2">
          <div className="pb-11 border-b text-primary-main border-primary-main font-bold items-center gap-6 inline-flex">
            <div className="text-4xl">01.</div>
            <div className="text-3xl">Youtube Services</div>
          </div>

          <div className="py-16 font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-4xl">02.</div>
            <div className="text-3xl">Tiktok Services</div>
          </div>

          <div className="pt-16 font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-4xl">03.</div>
            <div className="text-3xl">Streaming Services</div>
          </div>
        </div> */}

        {/* Second section */}
        {/* <div className="col-span-1 space-y-10">
          <div className="mb-4">
            <Image
              src="/images/videoEditing.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              Video Editing
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
              <span>- Short</span>
              <span>- Full length videos</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>

          <div>
            <Image
              src="/images/graphicdesign.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              Graphic Design
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid grid-cols-2 mb-4">
              <span>- thumbnails</span>
              <span>- logo</span>
              <span>- banners</span>
              <span>- merchandise</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>
        </div> */}

        {/* Third section */}
        {/* <div className="col-span-1 space-y-10">
          <div className="mb-4">
            <Image
              src="/images/consulting.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              Consulting & Coaching
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
              <span>- Content Ideation</span>
              <span>- Content Strategy</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>

          <div>
            <Image
              src="/images/animation.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              3d Animation
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
              <span>- Short</span>
              <span>- Full length</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>
        </div> */}
      </div>

      <div className="block lg:hidden">
        <MobileService />
      </div>
    </div>
  );
}
