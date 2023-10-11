"use client";
import { useEffect } from "react";
import Image from "next/image";
import Title from "../components/Title";
import contactImage from "../../../public/images/Contact.png";
import ContactCard from "../components/ContactCard";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
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
          <div className=" text-4xl xl:text-7xl leading-[60px] font-bold md:mt-5 text-primary-main">
            <div
              className="inline-flex items-center space-x-4"
              data-aos="fade-up"
            >
              <h3>Welcome to</h3>
            </div>

            <h3 data-aos="fade-up">OutFoxed Productions</h3>

            <p className="text-offwhite text-base md:mt-6 font-normal">
              And we are transforming your brand one
              <br className="block md:hidden" /> content at a time
            </p>
          </div>

          <div className="relative">
            <div className="pt-20 md:pt-32 lg:pt-40 max-w-5xl mx-auto text-start space-y-16 relative">
              <div className="relative">
                <Title title="Who we are" />
                <p
                  className="text-lg text-offwhite font-normal leading-relaxed"
                  data-aos="fade in"
                >
                  Welcome to OutfoxedStudios, your trusted partner for
                  professional video editing services! With over a decade of
                  experience in the world of content creation and video editing,
                  we understand the power of compelling visuals to captivate
                  audiences and drive engagement.
                </p>
              </div>

              <div
                className="relative grid grid-cols-2 gap-16"
                data-aos="zoom-in"
              >
                {/* <div>
                  <Title title="Meet Our Founders" />
                  <p
                    className="text-lg text-offwhite font-normal leading-relaxed"
                    data-aos="fade in"
                  >
                    Our journey began with Outfoxedgaming, a seasoned YouTuber
                    with a thriving channel boasting 1.2 million subscribers and
                    a remarkable 1 billion views. Outfoxed has been a passionate
                    content creator for over a decade, and their dedication to
                    producing high-quality, engaging videos has been the driving
                    force behind our success.
                  </p>
                </div> */}

                <div className="max-w-sm">
                  <h2 className="text-2xl lg:text-4xl font-bold text-primary-main">
                    Meet the Team
                  </h2>
                  <p className="mt-2">
                    Meet the awesome team that is dedicated to bringing your
                    business and you to success!
                  </p>

                  <p className="text-offwhite mt-6">
                    Our journey began with Outfoxedgaming, a seasoned YouTuber
                    with a thriving channel boasting 1.2 million subscribers and
                    a remarkable 1 billion views. Outfoxed has been a passionate
                    content creator for over a decade, and their dedication to
                    producing high-quality, engaging videos has been the driving
                    force behind our success.
                  </p>
                </div>

                <div className="">
                  <Image
                    src="/images/jim.jpeg"
                    alt="jim"
                    width={350}
                    height={200}
                    className="rounded"
                  />

                  <div>
                    <h3 className="text-2xl text-primary-main font-semibold font-sans mt-2">
                      Jim Whittle
                    </h3>

                    <p>
                      Jim Whittle is a veteran of the technology industry with
                      decades of experience in all facets of business. His
                      career achievements include startups, established software
                      companies and industry leading telecommunications
                      companies, as well as two of the world&apos;s most
                      successful technology companies
                    </p>
                  </div>
                </div>

                <div className="">
                  <Image
                    src="/images/rob.jpg"
                    alt="jim"
                    width={350}
                    height={200}
                    className="rounded"
                  />

                  <div>
                    <h3 className="text-2xl text-primary-main font-semibold font-sans mt-2">
                      Robert Murphy
                    </h3>

                    <p>
                      Robert Murphy is a seasoned Social Media Expert with a
                      decade of experience in video editing, copywriting, and
                      social media growth. He has an impressive track record of
                      nurturing multiple social media accounts to millions of
                      followers and accumulating over 3 billion views.
                      Robert&apos;s passion lies in leveraging the power of
                      social media to enhance brands, engage audiences, and
                      deliver tangible results. Whether it&apos;s crafting
                      compelling content, devising winning growth strategies, or
                      perfecting visual elements, Robert is dedicated to helping
                      you supercharge your online presence and achieve your
                      social media goals.
                    </p>
                  </div>
                </div>

                <div className="">
                  <Image
                    src="/images/jen.jpeg"
                    alt="jim"
                    width={350}
                    height={200}
                    className="rounded"
                  />

                  <div>
                    <h3 className="text-2xl text-primary-main font-semibold font-sans mt-2">
                      Jennifer Arnold
                    </h3>

                    <p>
                      Jennifer Arnold is a seasoned veteran in the fields of
                      animation and software engineering. With a wealth of
                      experience, she specializes in designing and developing
                      cutting-edge websites and applications. Her creative
                      insights and technical prowess are the driving force
                      behind her ability to bring ideas to life in the digital
                      world. Jennifer&apos;s dedication to crafting innovative
                      solutions ensures that her clients receive nothing less
                      than exceptional results, making her the go-to expert for
                      all your web and app development needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Title title="Our Impact" />
                <p
                  className="text-lg text-offwhite font-normal leading-relaxed"
                  data-aos="fade in"
                >
                  But our story doesn&apos;t end there. Outfoxed has also
                  leveraged their expertise to assist numerous content creators
                  in achieving a collective viewership of over 5 billion views!
                  We take pride in having played a crucial role in the success
                  stories of various YouTubers, helping them turn their visions
                  into reality through expert video editing.
                </p>
              </div>

              <div>
                <Title title="A Decade of Editing Excellence" />
                {/* <h1 className="text-4xl font-bold mb-4">Our Mission</h1> */}
                <p className="text-offwhite" data-aos="fade in">
                  With a decade of experience under our belt, our team brings
                  unparalleled expertise to every project. We&apos;ve honed our
                  skills over the years, staying ahead of industry trends and
                  adopting the latest editing techniques and technologies.
                  Whether it&apos;s a vlog, tutorial, promotional video, or any
                  other type of content, we have the knowledge and creativity to
                  make it shine.
                </p>
              </div>

              <div>
                <Title title="Why Choose Us" />
                <div className="text-offwhite" data-aos="fade in">
                  <div className="space-y-4">
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Quality Assurance:
                      </span>
                      <span>
                        We are committed to delivering top-notch video editing
                        that exceeds your expectations. Your vision is our
                        priority, and we won&apos;t rest until your content is
                        perfect.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Fast Turnaround:
                      </span>
                      <span>
                        We understand the importance of meeting deadlines. Our
                        streamlined processes ensure swift delivery without
                        compromising on quality.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Custom Solutions:
                      </span>
                      <span>
                        Every project is unique, and we tailor our services to
                        your specific needs. Whether you need a full video edit
                        or assistance with a particular aspect, we&aspos;ve got
                        you covered.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Affordable Pricing:
                      </span>
                      <span>
                        We believe that high-quality video editing should be
                        accessible to all. Our pricing is competitive and
                        designed to fit various budgets.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Client-Centric Approach:
                      </span>
                      <span>
                        Your satisfaction is our success. We collaborate closely
                        with you to ensure your vision is realized and your
                        goals are met.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactCard text="Let's Create Together" />
      </div>
    </div>
  );
}
