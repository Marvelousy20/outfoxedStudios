"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Background from "../../../../public/images/bg.png";
import blast from "../../../../public/images/blast.png";
import blastblue from "../../../../public/images/blastblue.png";
import rocket from "../../../../public/images/rocket.png";

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
    <div>
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

      <div className="lg:max-w-[70rem] relative mx-auto text-start md:text-center pt-12 md:pt-36 pb-24 px-4 md:px-0">
        <div
          className="text-primary50 text-6xl xl:text-8xl leading-[50px] font-bold mt-2 md:mt-5"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="inline-flex xl:gap-12 relative">
            <h3>Welcome to</h3>

            <div className="icon-slider hidden md:block h-[auto] md:h-[100px]">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className={`icon absolute -right-10 md:-right-8 top-4 ${
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

          <h3>Outfoxed Productions</h3>
        </div>

        <div
          className="md:text-center text-offwhite text-lg md:text-xl font-normal leading-relaxed mt-4 mb-12 lg:max-w-[50rem] mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {/* Whether you are a budding blogger, a thriving business, or an aspiring
          influencer, We are here to guide you towards content excellence and
          success in your industry. We have over a decade of experience creating */}
          and managing top-performing social media strategies and campaigns for
          businesses and influencers.
          <br />
          We do this by managing social media networks such as Facebook,
          Instagram, Twitter, LinkedIn and YouTube on your behalf.
          <br />
          In short, we use relevant social media marketing services to help
          businesses grow and exceed their goals, and dominate their markets
        </div>

        <a
          href="/contact"
          className="md:w-64 w-56 relative md:h-16 mb-4 hover:opacity-75 ease-in-out transition-all duration-300 text-lg font-semibold py-3 bg-primary-main rounded-lg justify-center items-center gap-2 inline-flex hover:shadow-hard"
        >
          View some of our clients
          <div className="icon-slider">
            {/* {icons.map((icon, index) => (
              <div
                key={index}
                className={`icon absolute ml-4 ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <Image src={icon} alt="blast" width="26" height="26" priority />
              </div>
            ))} */}
          </div>
        </a>

        {/* <div>
          <div className="icon-slider relative text-start !justify-start md:!justify-center">
            {works.map((work, index) => (
              <div
                key={index}
                className={`icon absolute top-0 ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                We create <span className="text-red">{work}</span> content
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
