"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Background from "../../../../public/images/background.png";
import Title from "../Title";
import blast from "../../../../public/images/blast.png";
import blastblue from "../../../../public/images/blastblue.png";
import rocket from "../../../../public/images/rocket.png";
import { motion } from "framer-motion";

const textNavigation = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },

  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Hero() {
  const icons = [blast, blastblue, rocket];
  const works = ["Youtube", "Tiktok", "Social media"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="absolute top-0 w-full">
        <Image
          src={Background}
          alt="background"
          width="1440"
          height="1140"
          placeholder="blur"
          className="w-full"
        />
      </div>

      <motion.div
        variants={textNavigation}
        animate="visible"
        initial="hidden"
        transition={{ duration: 1 }}
        className="lg:max-w-[55rem] relative mx-auto text-start md:text-center pt-12 md:pt-36 pb-24 px-4 md:px-0"
      >
        <Title title="Welcome! Outfoxed studio crafts contents that SCALE" />

        <motion.div className="text-primary50 text-5xl xl:text-7xl leading-[50px] font-bold mt-2 md:mt-5">
          <div className="inline-flex xl:gap-12 relative">
            <h3>Blast off</h3>

            <div className="icon-slider hidden md:block h-[auto] md:h-[100px]">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className={`icon absolute -right-10 md:-right-8 top-1 ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <Image
                    src={icon}
                    alt="blast"
                    width="70"
                    height="70"
                    priority
                    className="hidden md:block"
                  />

                  <Image
                    src={icon}
                    alt="blast"
                    width="40"
                    height="40"
                    priority
                    className="block md:hidden"
                  />
                </div>
              ))}
            </div>
          </div>

          <h3>to Content Excellence!</h3>
        </motion.div>

        <motion.div
          variants={itemMotion}
          className="md:text-center text-offwhite text-base md:text-lg font-normal leading-relaxed mt-4 mb-12 lg:max-w-[50rem] mx-auto"
        >
          Whether you are a budding blogger, a thriving business, or an aspiring
          influencer, We are here to guide you towards content excellence and
          success in your industry.
        </motion.div>

        <button className="md:w-64 w-56 relative md:h-16 mb-4 hover:opacity-75 ease-in-out transition-all duration-300 pr-4 py-3 bg-primary-main rounded-lg justify-center items-center gap-2 inline-flex hover:shadow-hard">
          Let&#39;s talk <div className="w-3.5 h-px border border-white"></div>
          <div className="text-white text-lg font-normal leading-relaxed">
            Contents
          </div>
          <div className="icon-slider">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`icon absolute ml-4 ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <Image src={icon} alt="blast" width="26" height="26" priority />
              </div>
            ))}
          </div>
        </button>

        <motion.div variants={itemMotion}>
          <div className="icon-slider relative text-start !justify-start md:!justify-center">
            {works.map((work, index) => (
              <div
                key={index}
                className={`icon absolute top-0 ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                We create <span className="text-red">{work}</span> contents
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full justify-center"
        >
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1100}
            height={832}
            className="rounded-box"
            priority
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-primary-main text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-primary-main text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full justify-center"
        >
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1100}
            height={832}
            className="rounded-box"
            priority
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-primary-main text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-primary-main text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full justify-center"
        >
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1100}
            height={832}
            className="rounded-box"
            priority
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-primary-main text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-primary-main text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-24 px-4 md:px-0">
        <div className="absolute inset-0 w-full">
          <img src="/images/line.png" alt="line" className="w-full h-full" />
        </div>
        <div className="max-w-3xl mx-auto text-start md:text-center">
          <Title title="Who we are" />
          <div className="relative">
            <div className="text-white text-3xl md:text-5xl md:leading-[65px] font-bold mb-6">
              Your partner in Content Success and Business Growth...
            </div>
            <div className="text-offwhite text-base md:text-lg font-normal leading-[27px] mb-16 max-w-[514px] mx-auto">
              Outfoxed as an expert and experienced creator understands the
              challenges you face in today&#39;s competitive landscape. I am
              here to support, inspire, and collaborate with you, sharing in
              your vision and helping you achieve content greatness.
            </div>

            <Link
              href="/"
              className="text-primary-main ease-in-out transition-all duration-300  text-lg font-normal leading-relaxed px-10 py-3 rounded-lg border border-primary50 inline-flex gap-4 hover:shadow-hard"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 2C16 3.48 17.4667 5.69467 18.9493 7.55467C20.8587 9.94933 23.1373 12.0413 25.752 13.6387C27.7107 14.8347 30.0893 15.9827 32 15.9827M16 30C16 28.52 17.4667 26.3053 18.9493 24.4453C20.8587 22.0507 23.1373 19.9587 25.752 18.3613C27.7107 17.1653 30.0893 16.0173 32 16.0173M32 16H0H32Z"
                  fill="white"
                />
                <path
                  d="M16 2C16 3.48 17.4667 5.69467 18.9493 7.55467C20.8587 9.94933 23.1373 12.0413 25.752 13.6387C27.7107 14.8347 30.0893 15.9827 32 15.9827M16 30C16 28.52 17.4667 26.3053 18.9493 24.4453C20.8587 22.0507 23.1373 19.9587 25.752 18.3613C27.7107 17.1653 30.0893 16.0173 32 16.0173M32 16H-9.53674e-07"
                  stroke="#404D56"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
