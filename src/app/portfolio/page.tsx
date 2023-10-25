"use client";
import { useState } from "react";
import Image from "next/image";
import Title from "../components/Title";
import Moon2 from "../../../public/images/Moon2.svg";
import ContactCard from "../components/ContactCard";
import { works } from "../components/data";
import YouTube, { YouTubeProps } from "react-youtube";
import CompanyList from "../components/Companies/companyList";

export default function Work() {
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
    height: "400",
    width: "608",
  };

  const mobileOpts = {
    height: "350",
    width: "350",
  };

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
        <h3 className="text-5xl lg:text-7xl font-bold mb-4">Our Portfolio</h3>
        <p className="text-offwhite">
          Checkout our portfolio and be convinced!
        </p>
      </div>
      <div className="relative z-10 mt-10 flex flex-col !items-center gap-y-12">
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
              <div key={i} className="flex justify-center">
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

      <div className="mt-20">
        <CompanyList />
      </div>

      {/* conquer section */}
      <ContactCard text="Conquer the content world and make your mark in your industry!" />
    </div>
  );
}
