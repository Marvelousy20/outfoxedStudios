import Image from "next/image";
import Title from "../components/Title";
import contactImage from "../../../public/images/Contact.png";
import ContactCard from "../components/ContactCard";
import B3 from "../../../public/images/b3.png";

export default function About() {
  return (
    <div className="text-white bg-background pb-24">
      <div className="h-screen absolute w-full top-0">
        <div className="absolute inset-0 bg-black opacity-50" />
        <Image
          src={contactImage}
          alt="contact"
          width="1440"
          height="1140"
          placeholder="blur"
          className="w-full"
          priority
        />
      </div>
      <div className="relative px-4">
        <div className="flex flex-col pt-16 md:pt-24 lg:pt-32 text-start md:text-center">
          <Title title="Who we are" />
          <div className="text-white text-4xl xl:text-7xl leading-[60px] font-bold md:mt-5">
            <div className="inline-flex items-center space-x-4">
              <h3>Yes, This is</h3>
              <span>
                <Image
                  src="/images/logo.png"
                  alt="outfoxed"
                  width="130"
                  height="130"
                  priority
                />
              </span>
            </div>

            <h3>OutFoxed Studio</h3>

            <p className="text-offwhite text-base md:mt-6 font-normal">
              And we are transforming your brand one
              <br className="block md:hidden" /> content at a time
            </p>
          </div>

          <div className="relative">
            <div className="pt-20 md:pt-32 lg:pt-40 max-w-2xl mx-auto text-start space-y-24 relative">
              <div className="relative">
                <Title title="Who are we" />
                <p className="text-lg text-offwhite font-normal leading-relaxed mt-6">
                  Outfoxed as an expert and experienced creator understands the
                  challenges you face in today&#39;s competitive landscape. I am
                  here to support, inspire, and collaborate with you, sharing in
                  your vision and helping you achieve content
                  greatness..Outfoxed as an expert and experienced creator
                  understands the challenges you face in today&#39;s competitive
                  landscape. I am here to support, inspire, and collaborate with
                  you, sharing in your vision and helping you achieve content
                  greatness.
                  <br className="!block md:hidden" />
                  <br className="!block md:hidden" />
                  Outfoxed as an expert and experienced creator understands the
                  challenges you face in today&#39;s competitive landscape. I am
                  here to support, inspire, and collaborate with you, sharing in
                  your vision and helping you achieve content
                  greatness..Outfoxed as an expert and experienced creator
                  understands the challenges you face in today&#39;s competitive
                  landscape. I am here to support, inspire, and collaborate with
                  you, sharing in your vision and helping you achieve content
                  greatness..
                </p>
              </div>

              <div>
                <Title title="Our Aim" />
                <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
                <p className="text-offwhite">
                  Take your brand to the next level, byhiring me! Outfoxed as an
                  expert and experienced creator understands the challenges you
                  face in today&apos;s competitive landscape. I am here to
                  support, inspire, and collaborate with you, sharing in your
                  vision and helping you achieve content greatness..
                </p>
              </div>
            </div>
          </div>
        </div>

        <ContactCard text="Let's work Together" />
      </div>
    </div>
  );
}
