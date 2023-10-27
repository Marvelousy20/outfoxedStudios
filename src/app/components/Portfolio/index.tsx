"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "../Title";
import Background2 from "../../../../public/images/bacground2.png";
import Mentorship from "../Mentorship";
import Accomplishment from "../Accomplishment";
import { works } from "../data";
import YouTube, { YouTubeProps } from "react-youtube";

export default function Portfolio() {
  const [selected, setSelected] = useState(works[0].title);
  const [isPlay, setIsPlaying] = useState(false);

  const onPlay = () => {
    // Stop any other video that is currently playing
    // Only allow one video to play at a time
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "250",
    width: "408",
  };

  const mobileOpts = {
    height: "350",
    width: "350",
  };

  return (
    <div className="px-4 md:px-8 py-20 lg:px-24 relative">
      <div>
        <Title title="Portfolio" />
        <h3 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
          Some of my works
        </h3>
      </div>

      <div className="relative z-10">
        <h3
          className="text-lg font-normal leading-relaxed mb-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Choose category here
        </h3>
        <div className="tabs mt-6 relative" data-aos="fade-up">
          {works.map((work, index) => (
            <div key={index}>
              <a
                className={`tab tab-bordered ${
                  selected === work.title
                    ? "tab-active text-primary-main !border-b-primary-main"
                    : "text-white"
                }`}
                onClick={() => setSelected(work.title)}
              >
                {work.title}
              </a>
            </div>
          ))}
        </div>

        <div
          className="relative z-10 mt-10"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          {works.map((work, index) => (
            <div
              key={index}
              className={`w-full ${
                selected === work.title
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
                  : "hidden"
              }`}
            >
              {work.data.map((data, i) => (
                <div key={i} className="">
                  <div className="hidden md:block">
                    <YouTube
                      videoId={data.link}
                      opts={opts}
                      onPlay={onPlay}
                      onPause={onPause}
                      onReady={onPlayerReady}
                    />
                  </div>

                  <div className="block md:hidden">
                    <YouTube
                      videoId={data.link}
                      opts={mobileOpts}
                      onPlay={onPlay}
                      onPause={onPause}
                      onReady={onPlayerReady}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6 !z-20">
          <Link
            href="/works"
            className="flex hover:shadow-hard items-center gap-2 bg-primary-main px-6 py-3 rounded-lg hover:opacity-75 ease-in-out transition-all duration-300"
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

        {/* <Mentorship /> */}
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
