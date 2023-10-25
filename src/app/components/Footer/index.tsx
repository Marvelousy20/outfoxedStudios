import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-background relative bottom-0 px-4 md:px-0 pb-10 pt-10">
      <div className="absolute inset-0">
        <img src="/images/line.png" alt="line" className="w-full h-full" />
      </div>
      <div className="flex flex-col md:flex-row justify-center relative">
        <div className="text-2xl md:text-3xl xl:text-5xl font-bold font-sans text-center">
          <span className="text-white">Outfoxed</span> <br />
          <span className="text-primary-main">Productions</span>
        </div>
      </div>

      <div className="md:flex flex-col md:flex-row justify-around items-center mt-20 relative">
        <div className="grid text-primary50">
          <a href="mailto:support@outfoxedproductions .com">
            support@outfoxedproductions.com
          </a>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-16">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
