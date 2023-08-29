import Image from "next/image";
import Title from "../components/Title";
import contactImage from "../../../public/images/Contact.png";
import ContactCard from "../components/ContactCard";

export default function About() {
  return (
    <div className="text-white bg-background pb-24">
      <div className="h-screen absolute w-full top-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Image
          src={contactImage}
          alt="contact"
          layout="fill"
          placeholder="blur"
          priority
        />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col pt-32 text-center">
          <Title title="Who we are" />
          <div className="text-white text-7xl font-bold mt-5">
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

            <p className="text-offwhite text-sm mt-6">
              And we are transforming your brand one content at a time
            </p>
          </div>

          <div className="pt-40 max-w-2xl mx-auto text-start">
            <Title title="Who are we" />
            <p className="text-lg text-offwhite font-normal leading-relaxed mt-6">
              Outfoxed as an expert and experienced creator understands the
              challenges you face in today&#39;s competitive landscape. I am
              here to support, inspire, and collaborate with you, sharing in
              your vision and helping you achieve content greatness..Outfoxed as
              an expert and experienced creator understands the challenges you
              face in today&#39;s competitive landscape. I am here to support,
              inspire, and collaborate with you, sharing in your vision and
              helping you achieve content greatness..Outfoxed as an expert and
              experienced creator understands the challenges you face in
              today&#39;s competitive landscape. I am here to support, inspire,
              and collaborate with you, sharing in your vision and helping you
              achieve content greatness..Outfoxed as an expert and experienced
              creator understands the challenges you face in today&#39;s
              competitive landscape. I am here to support, inspire, and
              collaborate with you, sharing in your vision and helping you
              achieve content greatness..
            </p>
          </div>
        </div>

        <ContactCard text="Let's work Together" />
      </div>
    </div>
  );
}
