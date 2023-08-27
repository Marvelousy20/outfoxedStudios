"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Background from "../../../../public/images/background.png";
import Title from "../Title";

export default function Hero() {
  const [activeItem, setActiveItem] = useState("item1");

  const handleActiveItem = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div className="">
      <div className="absolute top-0">
        <Image
          src={Background}
          alt="background"
          width="1440"
          height="1140"
          placeholder="blur"
        />
      </div>

      <div className="lg:max-w-[55rem] relative mx-auto text-center pt-36 pb-24">
        <Title title="Welcome! Outfoxed studio crafts contents that SCALE" />

        <div className="text-primary50 text-7xl font-bold mt-5">
          <div className="inline-flex">
            <h3>Blast off</h3>
            <span>
              <Image
                src="/images/blast.png"
                alt="blast"
                width="90"
                height="90"
                priority
              />
            </span>
          </div>

          <h3>to Content Excellence!</h3>
        </div>

        <div className="text-center text-offwhite text-lg font-normal leading-relaxed lg:mt-4 lg:mb-12 lg:max-w-[50rem] mx-auto">
          Whether you are a budding blogger, a thriving business, or an aspiring
          influencer, We are here to guide you towards content excellence and
          success in your industry.
        </div>

        <button className="w-64 h-16 lg:mb-4 hover:opacity-75 ease-in-out transition-all duration-300 px-6 py-3 bg-primary-main rounded-lg justify-center items-center gap-2 inline-flex">
          Let&#39;s talk <div className="w-3.5 h-px border border-white"></div>
          <div className="text-white text-lg font-normal leading-relaxed">
            Contents
          </div>
          <Image src="/images/blast2.png" alt="blast2" width="26" height="26" />
        </button>

        <div>
          <span className="inli">
            We create <span className="text-red">Youtube</span> contents
          </span>
        </div>
      </div>

      {/* <div className="carousel carousel-center mx-auto max-w-6xl p-4 space-x-4 rounded-box relative z-10 flex">
        <div className="carousel-item">
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1248}
            height={832}
            className="rounded-box"
            priority
          />
        </div>

        <div className="carousel-item">
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1248}
            height={832}
            className="rounded-box"
            priority
          />
        </div>

        <div className="carousel-item">
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1248}
            height={832}
            className="rounded-box"
            priority
          />
        </div>

      </div> */}

      <div className="carousel relative place-content-center">
        <div id="item1" className="carousel-item w-full flex justify-center">
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1100}
            height={832}
            className="rounded-box"
            priority
          />
        </div>
        <div id="item2" className="carousel-item w-full flex justify-center">
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1100}
            height={832}
            className="rounded-box"
            priority
          />
        </div>
        <div id="item3" className="carousel-item w-full flex justify-center">
          <Image
            src="/images/carousel1.png"
            alt="img"
            width={1100}
            height={832}
            className="rounded-box"
            priority
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#item1"
          className={`h-2 w-2 rounded-box ${
            activeItem === "item1" ? "bg-orange-400" : "bg-gray-400"
          }`}
          onClick={() => handleActiveItem("item1")}
        ></a>
        <a
          href="#item2"
          className={`h-2 w-2 rounded-box ${
            activeItem === "item2" ? "bg-orange-400" : "bg-gray-400"
          }`}
          onClick={() => handleActiveItem("item2")}
        ></a>
        <a
          href="#item3"
          className={`h-2 w-2 rounded-box ${
            activeItem === "item3" ? "bg-orange-400" : "bg-gray-400"
          }`}
          onClick={() => handleActiveItem("item3")}
        ></a>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-24">
        <Title title="Who we are" />
        <div>
          <div className="text-white text-[44px] font-bold">
            Your partner in Content Success and Business Growth...
          </div>
          <div className="text-offset text-lg font-normal leading-[27px] mb-16 max-w-[514px] mx-auto">
            Outfoxed as an expert and experienced creator understands the
            challenges you face in today&#39;s competitive landscape. I am here
            to support, inspire, and collaborate with you, sharing in your
            vision and helping you achieve content greatness.
          </div>

          <Link
            href="/"
            className="text-primary-main ease-in-out transition-all duration-300  text-lg font-normal leading-relaxed px-10 py-3 rounded-lg border border-primary50 inline-flex gap-4"
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
  );
}
