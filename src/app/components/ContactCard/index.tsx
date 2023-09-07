import Image from "next/image";
import Title from "../Title";
import Link from "next/link";

interface Props {
  text: string;
}

export default function ContactCard({ text }: Props) {
  return (
    <div className="max-w-4xl text-white mt-20 text-center z-10 mx-auto xl:mt-44 bg-card bg-opacity-75 rounded-3xl backdrop-blur-xl px-4 lg:px-28 py-24">
      <Title title="Contact us" />
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-2">
        {text}
      </h3>
      <p className="text-lg font-normal leading-relaxed text-offwhite">
        let us tailor a content solution that propels you towards success.
      </p>

      <Link
        href="/contact"
        className="inline-flex gap-2 hover:shadow-hard bg-primary-main px- py-3 rounded-lg mt-4 px-6 items-center hover:bg-opacity-75 ease-in-out transition-all duration-300"
      >
        <span>Let&apos;s talk</span>
        <div className="w-3.5 h-px border border-white"></div>
        <span>contents</span>
        <Image src="/images/blast2.png" alt="blast2" width="26" height="26" />
      </Link>
    </div>
  );
}
