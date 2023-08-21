import Title from "../Title";
import Image from "next/image";
import Moon from "../../../../public/images/Moon.png";
import Link from "next/link";

const trustees = [
  {
    img: "/images/company_logo.png",
    name: "Beauty",
    tiktok: "@beauty",
    youtube: "@beauty",
    followers: "500,000",
    views: "1,000,000",
    subscribers: "200,000",
  },

  {
    img: "/images/company_logo.png",
    name: "Beauty",
    tiktok: "@beauty",
    youtube: "@beauty",
    followers: "500,000",
    views: "1,000,000",
    subscribers: "200,000",
  },

  {
    img: "/images/company_logo.png",
    name: "Beauty",
    tiktok: "@beauty",
    youtube: "@beauty",
    followers: "500,000",
    views: "1,000,000",
    subscribers: "200,000",
  },

  {
    img: "/images/company_logo.png",
    name: "Beauty",
    tiktok: "@beauty",
    youtube: "@beauty",
    followers: "500,000",
    views: "1,000,000",
    subscribers: "200,000",
  },

  {
    img: "/images/company_logo.png",
    name: "Beauty",
    tiktok: "@beauty",
    youtube: "@beauty",
    followers: "500,000",
    views: "1,000,000",
    subscribers: "200,000",
  },

  {
    img: "/images/company_logo.png",
    name: "Beauty",
    tiktok: "@beauty",
    youtube: "@beauty",
    followers: "500,000",
    views: "1,000,000",
    subscribers: "200,000",
  },

  {
    img: "/images/company_logo.png",
    name: "Beauty",
    tiktok: "@beauty",
    youtube: "@beauty",
    followers: "500,000",
    views: "1,000,000",
    subscribers: "200,000",
  },
];

export default function Trustees() {
  return (
    <div>
      <div className="text-center">
        <Title title="My Achievements" />
        <div className="">
          <h3 className="text-5xl font-bold max-w-lg mx-auto">
            Trusted by creators and businesses
          </h3>
          <p className="text-lg text-offwhite leading-relaxed">
            Numbers do not lie...
          </p>
        </div>

        <div className="relative mt-16 as isolate aspect-[1.5] px-8 pb-8">
          <Image
            fill
            placeholder="blur"
            src={Moon}
            alt=""
            className=" !top-16 -z-10 object-cover bg-neutral-900 mix-blend-hard-light"
          />
          <div className="bg-blend-hard-light mix-blend-hard absolute inset-0 bg-gradient-to-b from-[rgba(13,22,27,0.30)] to-[rgba(13,22,27,0.30)]" />
          <div className="z-10 text-white relative">
            <div className="carousel carousel-center max-w-full p-4 space-x-4">
              {trustees.map((trustee, i) => (
                <div
                  key={i}
                  className="px-6 py-4 carousel-item grid bg-neutral-900 bg-opacity-75 rounded-3xl backdrop-blur-xl"
                >
                  <Image
                    src={trustee.img}
                    alt="img"
                    width="100"
                    height="100"
                    className="mb-8"
                  />
                  <span className="flex items-center gap-x-2 mb-4 text-offwhite">
                    <Image
                      src="/images/logos_tiktok-icon.svg"
                      alt="img"
                      width="24"
                      height="24"
                    />
                    {trustee.tiktok}
                  </span>

                  <span className="flex items-center gap-x-2 text-offwhite">
                    <Image
                      src="/images/logos_youtube-icon.svg"
                      alt="img"
                      width="24"
                      height="24"
                    />
                    {trustee.youtube}
                  </span>

                  <div className="text-start mt-8">
                    <h3 className="text-offwhite mb-2">Live data: </h3>
                    <div className="flex justify-between gap-6">
                      <div className="text-center flex">
                        {trustee.followers} <br /> followers
                        <span className="self-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_200_4981)">
                              <path
                                d="M18.9396 10.4067L12.4996 4L6.05965 10.4067C5.98367 10.4645 5.921 10.538 5.8759 10.6222C5.8308 10.7064 5.80431 10.7993 5.79823 10.8946C5.79215 10.9899 5.80662 11.0854 5.84065 11.1747C5.87469 11.2639 5.9275 11.3448 5.99552 11.4118C6.06353 11.4789 6.14515 11.5305 6.23486 11.5633C6.32457 11.596 6.42028 11.6091 6.51549 11.6017C6.6107 11.5943 6.70321 11.5664 6.78674 11.5201C6.87027 11.4738 6.94288 11.4101 6.99965 11.3333L11.833 6.54V19.2933C11.833 19.4701 11.9032 19.6397 12.0282 19.7647C12.1533 19.8898 12.3228 19.96 12.4996 19.96C12.6765 19.96 12.846 19.8898 12.9711 19.7647C13.0961 19.6397 13.1663 19.4701 13.1663 19.2933V6.54L17.9996 11.3333C18.1252 11.458 18.2951 11.5277 18.472 11.527C18.6489 11.5264 18.8183 11.4555 18.943 11.33C19.0676 11.2045 19.1373 11.0346 19.1367 10.8576C19.1361 10.6807 19.0652 10.5113 18.9396 10.3867V10.4067Z"
                                fill="#0EB100"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_200_4981">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>

                      <div className="text-center flex">
                        {trustee.views} <br /> views
                        <span className="self-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_200_4981)">
                              <path
                                d="M18.9396 10.4067L12.4996 4L6.05965 10.4067C5.98367 10.4645 5.921 10.538 5.8759 10.6222C5.8308 10.7064 5.80431 10.7993 5.79823 10.8946C5.79215 10.9899 5.80662 11.0854 5.84065 11.1747C5.87469 11.2639 5.9275 11.3448 5.99552 11.4118C6.06353 11.4789 6.14515 11.5305 6.23486 11.5633C6.32457 11.596 6.42028 11.6091 6.51549 11.6017C6.6107 11.5943 6.70321 11.5664 6.78674 11.5201C6.87027 11.4738 6.94288 11.4101 6.99965 11.3333L11.833 6.54V19.2933C11.833 19.4701 11.9032 19.6397 12.0282 19.7647C12.1533 19.8898 12.3228 19.96 12.4996 19.96C12.6765 19.96 12.846 19.8898 12.9711 19.7647C13.0961 19.6397 13.1663 19.4701 13.1663 19.2933V6.54L17.9996 11.3333C18.1252 11.458 18.2951 11.5277 18.472 11.527C18.6489 11.5264 18.8183 11.4555 18.943 11.33C19.0676 11.2045 19.1373 11.0346 19.1367 10.8576C19.1361 10.6807 19.0652 10.5113 18.9396 10.3867V10.4067Z"
                                fill="#0EB100"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_200_4981">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>

                      <div className="text-center flex">
                        {trustee.subscribers} <br /> subscribers
                        <span className="self-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_200_4981)">
                              <path
                                d="M18.9396 10.4067L12.4996 4L6.05965 10.4067C5.98367 10.4645 5.921 10.538 5.8759 10.6222C5.8308 10.7064 5.80431 10.7993 5.79823 10.8946C5.79215 10.9899 5.80662 11.0854 5.84065 11.1747C5.87469 11.2639 5.9275 11.3448 5.99552 11.4118C6.06353 11.4789 6.14515 11.5305 6.23486 11.5633C6.32457 11.596 6.42028 11.6091 6.51549 11.6017C6.6107 11.5943 6.70321 11.5664 6.78674 11.5201C6.87027 11.4738 6.94288 11.4101 6.99965 11.3333L11.833 6.54V19.2933C11.833 19.4701 11.9032 19.6397 12.0282 19.7647C12.1533 19.8898 12.3228 19.96 12.4996 19.96C12.6765 19.96 12.846 19.8898 12.9711 19.7647C13.0961 19.6397 13.1663 19.4701 13.1663 19.2933V6.54L17.9996 11.3333C18.1252 11.458 18.2951 11.5277 18.472 11.527C18.6489 11.5264 18.8183 11.4555 18.943 11.33C19.0676 11.2045 19.1373 11.0346 19.1367 10.8576C19.1361 10.6807 19.0652 10.5113 18.9396 10.3867V10.4067Z"
                                fill="#0EB100"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_200_4981">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* conquer section */}
          <div className="max-w-4xl z-10 mx-auto lg:mt-44 bg-neutral-900 bg-opacity-75 rounded-3xl backdrop-blur-xl lg:px-28 lg:py-24">
            <Title title="Contact us" />
            <h3 className="text-center text-4xl font-bold mb-2">
              Conquer the content world and make your mark in your industry!
            </h3>
            <p className="text-lg font-normal leading-relaxed text-offwhite">
              let us tailor a content solution that propels you towards success.
            </p>

            <Link
              href="/"
              className="inline-flex gap-2 bg-primary-main px- py-3 rounded-lg mt-4 px-6 items-center hover:opacity-75 ease-in-out transition-all duration-300"
            >
              <span>Let&apos;s talk</span>
              <div className="w-3.5 h-px border border-white"></div>
              <span>contents</span>
              <Image
                src="/images/blast2.png"
                alt="blast2"
                width="26"
                height="26"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
