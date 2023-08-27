import Link from "next/link";
import Image from "next/image";

export default function Accomplishment() {
  return (
    <div className="pt-16 mx-24">
      <div className="bg-white text-black flex justify-around py-16 rounded-t-lg">
        <div className="text-zinc-600 font-bold text-lg">
          Accomplished <br /> so far:
        </div>
        <div>
          <sup className="text-primary50 text-lg font-normal leading-relaxed">
            Over
          </sup>
          <span className="text-primary-main text-4xl font-bold">
            1 billion
          </span>
          <span className="block text-zinc-600 text-lg font-normal leading-relaxed text-center">
            Subscribers
          </span>
        </div>
        <div>
          <sup className="text-primary50 text-lg font-normal leading-relaxed">
            Over
          </sup>
          <span className="text-primary-main text-4xl font-bold">
            1 billion
          </span>
          <span className="block text-zinc-600 text-lg font-normal leading-relaxed text-center">
            Views acquired
          </span>
        </div>
        <div>
          <sup className="text-primary50 text-lg font-normal leading-relaxed">
            Over
          </sup>
          <span className="text-primary-main text-4xl font-bold">
            40+ multiple
          </span>
          <span className="block text-zinc-600 text-lg font-normal leading-relaxed text-center">
            viral videos
          </span>
        </div>
      </div>

      {/* container for three cards */}
      <div className="bg-card px-24 py-6 rounded-b-lg flex justify-between items-center">
        {/* First card */}
        <div className="">
          <h3>Live Feed</h3>
          <div className="px-4 py-6 bg-gray-950 bg-opacity-80 rounded-3xl backdrop-blur-xl flex-col justify-start items-start gap-6 inline-flex">
            <p>My channel</p>

            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="25"
                viewBox="0 0 35 25"
                fill="none"
              >
                <g clip-path="url(#clip0_200_4971)">
                  <path
                    d="M33.8795 4.24333C33.6837 3.51981 33.3018 2.86019 32.7718 2.33017C32.2418 1.80015 31.5822 1.41821 30.8587 1.2224C28.2099 0.5 17.5494 0.5 17.5494 0.5C17.5494 0.5 6.88829 0.521867 4.23949 1.24427C3.51596 1.44009 2.85635 1.82205 2.32635 2.35209C1.79635 2.88214 1.41446 3.54178 1.21869 4.26533C0.417492 8.97173 0.106692 16.1432 1.24069 20.6613C1.43648 21.3849 1.81838 22.0445 2.34838 22.5745C2.87838 23.1045 3.53798 23.4865 4.26149 23.6823C6.91029 24.4047 17.5711 24.4047 17.5711 24.4047C17.5711 24.4047 28.2318 24.4047 30.8804 23.6823C31.604 23.4865 32.2636 23.1045 32.7936 22.5745C33.3236 22.0445 33.7056 21.3849 33.9014 20.6613C34.7464 15.9483 35.0068 8.7812 33.8795 4.24333Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M14.1562 17.5749L23 12.4525L14.1562 7.33008V17.5749Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_200_4971">
                    <rect
                      width="34.1333"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span>
                Outfoxed Studio <br /> (@outfoxed)
              </span>
            </div>

            {/* live data */}
            <p>Live data:</p>

            <div className="flex gap-6">
              {/* Views */}
              <div className="text-center flex gap-3">
                11.8M <br /> Views
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
              {/* Subscribers */}
              <div className="text-center flex gap-3">
                1.2M <br /> Subsribers
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

        {/* Second card */}
        <div className="">
          <h3 className="invisible">hello</h3>
          <div className="px-4 py-6 bg-gray-950 bg-opacity-80 rounded-3xl backdrop-blur-xl flex-col justify-start items-start gap-6 inline-flex">
            <p>
              My Clients <span className="text-[#009FF5]">(40+)</span>
            </p>

            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="25"
                viewBox="0 0 35 25"
                fill="none"
              >
                <g clip-path="url(#clip0_200_4971)">
                  <path
                    d="M33.8795 4.24333C33.6837 3.51981 33.3018 2.86019 32.7718 2.33017C32.2418 1.80015 31.5822 1.41821 30.8587 1.2224C28.2099 0.5 17.5494 0.5 17.5494 0.5C17.5494 0.5 6.88829 0.521867 4.23949 1.24427C3.51596 1.44009 2.85635 1.82205 2.32635 2.35209C1.79635 2.88214 1.41446 3.54178 1.21869 4.26533C0.417492 8.97173 0.106692 16.1432 1.24069 20.6613C1.43648 21.3849 1.81838 22.0445 2.34838 22.5745C2.87838 23.1045 3.53798 23.4865 4.26149 23.6823C6.91029 24.4047 17.5711 24.4047 17.5711 24.4047C17.5711 24.4047 28.2318 24.4047 30.8804 23.6823C31.604 23.4865 32.2636 23.1045 32.7936 22.5745C33.3236 22.0445 33.7056 21.3849 33.9014 20.6613C34.7464 15.9483 35.0068 8.7812 33.8795 4.24333Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M14.1562 17.5749L23 12.4525L14.1562 7.33008V17.5749Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_200_4971">
                    <rect
                      width="34.1333"
                      height="24"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span>
                Outfoxed Studio <br /> (@outfoxed)
              </span>
            </div>

            {/* live data */}
            <p>Live data:</p>

            <div className="flex gap-6">
              {/* Views */}
              <div className="text-center flex gap-3">
                11.8M <br /> Views
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
              {/* Subscribers */}
              <div className="text-center flex gap-3">
                1.2M <br /> Subsribers
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

        {/* Third card */}
        <div>
          <h1 className="font-semibold text-2xl leading-relaxed">
            Want to learn how to <br /> achieve this?
          </h1>
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary-main px-6 py-3 rounded-lg mt-4 hover:opacity-75 ease-in-out transition-all duration-300"
          >
            <span>Get Mentored by me</span>
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
  );
}
