import Image from "next/image";
import Title from "../Title";

export default function Services() {
  return (
    <div className="lg:pt-44 lg:px-28" id="services">
      <div className="text-center">
        <Title title="How I help you" />
        <div className="inline-flex">
          <h3 className="text-5xl font-bold">Services I Offer</h3>
        </div>

        <div className="text-offwhite text-lg font-normal leading-relaxed">
          <div className="relative inline-block">
            <div>Your one stop shop for all things content creation</div>
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
      </div>

      <div className="grid grid-cols-4 items-center mt-20 gap-x-10">
        {/* first section */}
        <div className="col-span-2">
          <div className="pb-11 border-b text-primary-main border-primary-main font-bold items-center gap-6 inline-flex">
            <div className="text-4xl">01.</div>
            <div className="text-3xl">Youtube Services</div>
          </div>

          <div className="py-16 font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-4xl">02.</div>
            <div className="text-3xl">Tiktok Services</div>
          </div>

          <div className="pt-16 font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-4xl">03.</div>
            <div className="text-3xl">Streaming Services</div>
          </div>
        </div>

        {/* Second section */}
        <div className="col-span-1 space-y-10">
          <div className="mb-4">
            <Image
              src="/images/videoEditing.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              Video Editing
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
              <span>- Short</span>
              <span>- Full length videos</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>

          <div>
            <Image
              src="/images/graphicdesign.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              Graphic Design
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid grid-cols-2 mb-4">
              <span>- thumbnails</span>
              <span>- logo</span>
              <span>- banners</span>
              <span>- merchandise</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>
        </div>

        {/* Third section */}
        <div className="col-span-1 space-y-10">
          <div className="mb-4">
            <Image
              src="/images/consulting.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              Consulting & Coaching
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
              <span>- Content Ideation</span>
              <span>- Content Strategy</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>

          <div>
            <Image
              src="/images/animation.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-2xl font-semibold leading-relaxed">
              3d Animation
            </p>
            <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
              <span>- Short</span>
              <span>- Full length</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>
        </div>
      </div>

      {/* first column */}
      <div className="flex justify-between !items-center">
        {/* <div className="flex-grow">
          <div className="pb-11 border-b text-primary-main border-primary-main font-bold items-center gap-6 inline-flex">
            <div className="text-4xl">01.</div>
            <div className="text-3xl">Youtube Services</div>
          </div>

          <div className="py-16 font-bold flex items-center gap-6 ">
            <div className="text-4xl">02.</div>
            <div className="text-3xl">Tiktok Services</div>
          </div>

          <div className="pt-16 font-bold items-center gap-6 flex">
            <div className="text-4xl">03.</div>
            <div className="text-3xl">Streaming Services</div>
          </div>
        </div>
        <div></div> */}

        {/* second column */}
        {/* <div>
          <div className="col-span-1 space-y-10">
            <div className="mb-4">
              <Image
                src="/images/videoEditing.png"
                alt="video"
                width="40"
                height="40"
              />
              <p className="text-2xl font-semibold leading-relaxed">
                Video Editing
              </p>
              <div className="text-offwhite text-lg font-normal leading-relaxed grid mb-4">
                <span>- Short</span>
                <span>- Full length videos</span>
              </div>
              <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2">
                Hire me
              </button>
            </div>

            <div>
              <Image
                src="/images/graphicdesign.png"
                alt="video"
                width="40"
                height="40"
              />
              <p className="text-2xl font-semibold leading-relaxed">
                Graphic Design
              </p>
              <div className="text-offwhite text-lg font-normal leading-relaxed grid grid-cols-2 mb-4">
                <span>- thumbnails</span>
                <span>- logo</span>
                <span>- banners</span>
                <span>- merchandise</span>
              </div>
              <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2">
                Hire me
              </button>
            </div>
          </div>
        </div>
        <div>Hello</div> */}
      </div>
    </div>
  );
}
