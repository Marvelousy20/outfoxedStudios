import Title from "../Title";
import Image from "next/image";
import HomeContact from "../ContactCard/homeContact";
import B2 from "../../../../public/images/b2.png";

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
    <div className="relative md:pt-20 lg:pt-32">
      <div className="absolute top-0 w-full">
        <Image
          src={B2}
          alt="background"
          width="1440"
          height="1140"
          placeholder="blur"
          className="w-full"
        />
      </div>
      <div className="text-start md:text-center relative">
        <div className="px-4">
          <Title title="My Achievements" />
          <div className="">
            <h3
              className="text-3xl md:text-5xl font-bold max-w-lg mx-auto"
              data-aos="fade-up"
            >
              Trusted by creators and businesses
            </h3>
            <p
              className="md:text-lg text-offwhite leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Numbers do not lie...
            </p>
          </div>
        </div>

        <div className="relative mt-12 md:mt-16 as isolate aspect-[1.5] md:px-8 pb-8">
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
          <div className="px-4 md:px-0">
            <HomeContact />
          </div>
        </div>
      </div>
    </div>
  );
}
