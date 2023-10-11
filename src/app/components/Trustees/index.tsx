import Title from "../Title";
import Image from "next/image";
import HomeContact from "../ContactCard/homeContact";
import B2 from "../../../../public/images/b2.png";
import { FiInstagram } from "react-icons/fi";
import CountUp from "react-countup";

const trustees = [
  {
    img: "/images/invade-coffee.avif",
    name: "Invader Coffee",
    youtube: "Invader Coffee",
    instagramLink: "https://www.instagram.com/invadercoffee/?hl=en",
    youtubeLink: "https://www.youtube.com/channel/UC1YFNzwe6gHOLYNi0vJqAcw",
    views: 115,
    subscribers: 658,
  },
  {
    img: "/images/bang-logo.png",
    name: "Bang Energy",
    youtube: "Bang Energy",
    instagramLink: "https://www.instagram.com/bangenergy/",
    youtubeLink: "https://www.youtube.com/@BangEnergy/channels",
    views: 13,
    subscribers: 15.2,
  },
  {
    img: "https://static1.st8fm.com/en_US/dxl-1x/prod/css/images/header/state-farm-logo-4.svg",
    name: "State Farm",
    youtube: "State Farm",
    instagramLink: "https://www.instagram.com/statefarm/",
    youtubeLink: "https://www.youtube.com/c/statefarm",
    views: 12.2,
    subscribers: 234,
  },

  {
    img: "https://dlcdnimgs.asus.com/images/logo/logo-002.svg",
    name: "Asus",
    youtube: "Asus",
    instagramLink: "https://www.instagram.com/ewinracing/",
    youtubeLink: "https://www.youtube.com/c/EwinRacing/featured",
    views: 28.2,
    subscribers: 820,
  },

  {
    img: "https://www.ewinracing.com/themes/default-bootstrap/img/logow.svg",
    name: "Ewin Gaming Chair",
    youtube: "Ewin Racing",
    instagramLink: "https://www.instagram.com/ewinracing/",
    youtubeLink: "https://www.youtube.com/c/EwinRacing/featured",
    views: 553.5,
    subscribers: 877,
  },

  {
    img: "https://images.secretlab.co/theme/common/logo_secretlab.svg",
    name: "Secret Lab",
    youtube: "Secret lab",
    instagramLink: "https://www.instagram.com/secretlab/",
    youtubeLink: "https://www.youtube.com/secretlabchairs",
    views: 38.1,
    subscribers: 21.8,
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
                  className="px-6 py-4 lg:px-8 lg:py-8 carousel-item grid w-[250px] bg-neutral-900 bg-opacity-75 rounded-3xl backdrop-blur-xl"
                >
                  <Image
                    src={trustee.img}
                    alt="img"
                    width="100"
                    height="100"
                    className="mb-8"
                  />
                  <span className="flex items-center gap-x-2 mb-4 text-offwhite hover:opacity-80">
                    <FiInstagram size={24} />
                    <a href={trustee.instagramLink}>{trustee.name}</a>
                  </span>

                  <span className="flex items-center gap-x-2 text-offwhite hover:opacity-80">
                    <Image
                      src="/images/logos_youtube-icon.svg"
                      alt="img"
                      width="24"
                      height="24"
                    />
                    <a href={trustee.youtubeLink}>{trustee.name}</a>
                  </span>

                  <div className="text-start mt-8">
                    <h3 className="text-offwhite mb-2">Live data: </h3>
                    <div className="flex justify-between gap-6">
                      <div className="text-center">
                        <CountUp end={trustee.views} duration={30} />M<br />
                        <div className="flex">views</div>
                      </div>

                      <div className="text-center">
                        <CountUp end={trustee.subscribers} duration={10} />k
                        <br />
                        <div className="flex">Subscibers</div>
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
