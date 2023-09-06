import Image from "next/image";
import Title from "../Title";
import Link from "next/link";

export default function HomeContact() {
  return (
    <div className="my-16 md:my-0 md:px-0 text-white">
      <div className="md:max-w-4xl text-center z-10 mx-auto lg:mt-44 bg-neutral-900 bg-opacity-75 rounded-3xl backdrop-blur-xl px-8 lg:px-28 lg:py-24 py-16">
        <Title title="Contact us" />
        <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-2">
          Conquer the content world and make your mark in your industry!
        </h3>
        <p className="text-base md:text-lg font-normal leading-relaxed text-offwhite">
          let us tailor a content solution that
          <br className="block md:hidden" /> propels you towards success.
        </p>

        <Link
          href="/"
          className="inline-flex hover:shadow-hard gap-2 bg-primary-main px- py-3 rounded-lg mt-4 px-6 items-center hover:opacity-75 ease-in-out transition-all duration-300"
        >
          <span>Let&apos;s talk</span>
          <div className="w-3.5 h-px border border-white"></div>
          <span>contents</span>
          <Image src="/images/blast2.png" alt="blast2" width="26" height="26" />
        </Link>
      </div>
    </div>
  );
}
