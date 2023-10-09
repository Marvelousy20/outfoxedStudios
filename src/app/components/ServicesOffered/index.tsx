"use client";

import Image from "next/image";
import { useState } from "react";
import Title from "../Title";
import MobileService from "./mobileService";
import B2 from "../../../../public/images/b2.png";
import Link from "next/link";

const services = [
  {
    title: "Website Services",
    number: "01",
    servicesRendered: [
      {
        img: "/images/animation.png",
        name: "Frontend development",
      },
      {
        img: "/images/animation.png",
        name: "Backend development",
      },
      {
        img: "/images/animation.png",
        name: "Search Engine Optimization (SEO)",
      },
      {
        img: "/images/animation.png",
        name: "Keyword Research",
      },
      {
        img: "/images/animation.png",
        name: "Content Creation",
      },
      {
        img: "/images/animation.png",
        name: "Copy Writing",
      },
      {
        img: "/images/animation.png",
        name: "Script Writing and Storyboarding",
      },
      {
        img: "/images/animation.png",
        name: "Custom Applications Development",
      },
      {
        img: "/images/animation.png",
        name: "Animation (3D Animation) ",
      },
    ],
  },

  {
    title: "Social Media Management",
    number: "02",
    servicesRendered: [
      {
        img: "/images/videoEditing.png",
        name: "Content Optimization",
      },
      {
        img: "/images/videoEditing.png",
        name: "Website and Channel Optimization for Social Media",
      },
      {
        img: "/images/videoEditing.png",
        name: "Title/Tags/Description Optimization for Video Uploads",
      },
      {
        img: "/images/videoEditing.png",
        name: "Content Creation and Ads",
      },
      {
        img: "/images/videoEditing.png",
        name: "Marketing Services",
      },
      {
        img: "/images/videoEditing.png",
        name: "Marketing Campaigns",
      },
      {
        img: "/images/videoEditing.png",
        name: "Video Editing",
      },
    ],
  },
  {
    title: "Application Development",
    number: "03",
    servicesRendered: [
      {
        img: "/images/graphicdesign.png",
        name: "Android App Development",
      },
      {
        img: "/images/graphicdesign.png",
        name: "iOS App Development",
      },
      {
        img: "/images/graphicdesign.png",
        name: "Game Development",
      },
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(services[0].title);
  return (
    <div
      className="pt-20 lg:pt-44 lg:px-28 px-4 relative bg-gradient-to-r from-[#01121C] to-[#000A11]"
      id="services"
    >
      <div className="absolute top-0 inset-0 w-full">
        <Image
          src={B2}
          alt="background"
          width="1440"
          height="2040"
          placeholder="blur"
          className="w-full"
        />
      </div>
      <div className="text-start md:text-center relative">
        <Title title="How I help you" />
        <div className="inline-flex" data-aos="fade-up">
          <h3 className="text-3xl md:text-5xl md:leading-[65px] font-bold">
            Services I Offer
          </h3>
        </div>

        <div className="text-offwhite text-base md:text-lg font-normal leading-relaxed relative">
          <div className="relative inline-block">
            <div data-aos="fade-up" data-aos-delay="150">
              Your one stop shop for all things content creation
            </div>
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

      <div
        className="hidden lg:block mt-20 relative"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
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
                <div className="text-2xl whitespace-nowrap">
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
                    ? "grid grid-cols-2 gap-8"
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
                        {/* {s.variaties?.map((variety) => (
                          <div key={index}>
                            <span>- {variety}</span>
                          </div>
                        ))} */}
                      </div>
                      {/* <a
                        href="/contact"
                        className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300"
                      >
                        Hire me
                      </a> */}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div className="mt-12 font-semibold text-center flex justify-center">
              <Link
                href="/contact"
                className="text-primary-main !w-full border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300"
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="block lg:hidden relative"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <MobileService />
      </div>
    </div>
  );
}
