// This component is beingused by portfolio
import { useState } from "react";
import Image from "next/image";
import Title from "../Title";
import MobileMentorship from "./mobileMentorship";
import { data } from "../mentorshipData";

export default function Mentorship() {
  const [selected, setSelected] = useState(data[0].title);

  return (
    <div className="relative text-start md:text-center pt-16 md:pt-24 lg:pt-32 overflow-hidden">
      <div className="">
        <Title title="Get mentored" />
        <div className="">
          <h3 className="text-3xl md:text-5xl font-bold">
            Mentorship/Coaching
          </h3>
        </div>

        <div className="text-offwhite text-base md:text-lg font-normal leading-relaxed">
          <div className="relative inline-block">
            <div>My content knowledge to help you scale</div>
            <div className="absolute -right-16 top-0">
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

        <div className="lg:px-4 mt-20 hidden max-w-[68rem] mx-auto lg:flex justify-between mb-20">
          <h3 className="text-base md:text-lg font-bold mt-1 text-offwhite text-start mb-6">
            Get Mentorship on:
          </h3>
          <div>
            <div className="tabs relative">
              {data.map((data, index) => (
                <div key={index}>
                  <a
                    className={`tab tab-bordered md:text-xl lg:text-2xl xl:text-3xl font-bold pb-16 ${
                      selected === data.title
                        ? "tab-active text-primary-main !border-b-primary-main"
                        : ""
                    }`}
                    onClick={() => setSelected(data.title)}
                  >
                    {data.title}
                  </a>
                </div>
              ))}
            </div>
            <div className="relative z-10 mt-10">
              {data.map((data, index) => (
                <div
                  key={index}
                  className={`w-full ${
                    selected === data.title
                      ? "grid grid-cols-1 md:grid-cols-2 gap-32"
                      : "hidden"
                  }`}
                >
                  {data.data.map((data, i) => (
                    <div key={i} className="flex flex-col items-start">
                      <Image
                        src={data.img}
                        alt="img"
                        width="40"
                        height="40"
                        priority
                      />
                      <p className="text-offwhite text-base md:text-lg font-normal leading-relaxed">
                        {data.text}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <MobileMentorship />
        </div>
      </div>
    </div>
  );
}
