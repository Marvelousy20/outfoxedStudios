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
                  At Outfoxed Productions, we are more than just a Social Media
                  Marketing Agency; we are your partners in navigating the
                  dynamic and ever-expanding digital landscape. With a
                  full-stack approach to digital marketing, we cater to
                  businesses striving to carve their niche in the competitive
                  online sphere.
                </p>
              </div>

              <div className="relative">
                <Title title="Our Unique Edge" />
                <p
                  className="text-lg text-offwhite font-normal leading-relaxed"
                  data-aos="fade in"
                >
                  What sets us apart is our collective experience in both
                  influencer marketing and the tech industry. With our
                  team&apos;s cumulative experience, we have garnered over 5
                  million followers across various social media platforms. In
                  addition, our seasoned professionals bring over two decades of
                  hands-on experience in the rapidly evolving tech industry.
                  This unique blend of influencer insights and technical
                  expertise enables us to craft strategies that are not only
                  innovative but also rooted in a deep understanding of the
                  digital landscape.
                </p>
              </div>

              <div className="relative">
                <Title title="Decades of Digital Prowess" />
                <p
                  className="text-lg text-offwhite font-normal leading-relaxed"
                  data-aos="fade in"
                >
                  With a cumulative experience of over 40 years in the tech
                  world, we bring an in-depth understanding of the digital
                  realm. From the early stages of the internet revolution to the
                  current era of social media dominance, we have evolved
                  alongside the digital landscape, accumulating insights and
                  expertise that empower us to craft bespoke solutions for each
                  of our clients.
                </p>
              </div>

              <div className="relative">
                <Title title="Our Commitment" />
                <p
                  className="text-lg text-offwhite font-normal leading-relaxed"
                  data-aos="fade in"
                >
                  Driven by our passion for innovation and our commitment to
                  excellence, we don&apos;t just offer services; we deliver
                  comprehensive solutions that transcend conventional marketing
                  approaches. By leveraging our multifaceted expertise and
                  leveraging the latest digital tools and trends, we help
                  businesses not just thrive but dominate their digital
                  presence.
                  <br />
                  Join hands with us at Outfoxed Productions, and embark on an
                  exciting journey towards digital success.
                </p>
              </div>

              <div className="relative">
                <Title title="Our Impact" />
                <p
                  className="text-lg text-offwhite font-normal leading-relaxed"
                  data-aos="fade in"
                >
                  Through our strategic digital solutions, we have catalyzed the
                  growth and expansion of numerous businesses across diverse
                  industries. From enhancing brand visibility to fostering
                  authentic audience engagement, our data-driven strategies have
                  consistently yielded tangible results. By meticulously
                  tailoring our approach to each client&apos;s unique
                  requirements, we have fostered lasting connections between
                  brands and their target audiences, driving not just short-term
                  gains but also sustainable, long-term growth. Our commitment
                  to innovation and adaptability has empowered businesses to
                  navigate the complexities of the digital realm with
                  confidence, enabling them to stay ahead of the curve in an
                  ever-evolving online landscape. With a focus on measurable
                  outcomes and a passion for driving meaningful change, we take
                  pride in being an integral part of our clients&apos; success
                  stories.
                </p>
              </div>

              <div>
                <Title title="Decades of Experience" />
                {/* <h1 className="text-4xl font-bold mb-4">Our Mission</h1> */}
                <p className="text-offwhite" data-aos="fade in">
                  With a wealth of collective experience spanning several
                  decades, our team at Outfoxed Productions stands as a
                  testament to our unwavering dedication to mastering the
                  digital realm. We&apos;ve witnessed the evolution of
                  technology and online platforms firsthand, adapting and
                  innovating with each shift in the digital landscape. Our
                  diverse expertise, encompassing influencer marketing,
                  technical insights, and a deep understanding of the digital
                  marketing ecosystem, allows us to offer our clients a level of
                  experience and insight that few can match. Our years of
                  hands-on involvement in the digital world have provided us
                  with a unique perspective that informs our strategies and
                  ensures we remain at the forefront of digital marketing
                  trends. Trust in our seasoned team to leverage this wealth of
                  experience to drive your brand&apos;s success in the digital
                  age.
                </p>
              </div>

              <div>
                <Title title="Why Choose Us" />
                <div className="text-offwhite" data-aos="fade in">
                  <div className="space-y-4">
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Quality Execution:
                      </span>
                      <span>
                        With a background in influencer marketing and decades of
                        technical experience, we guarantee top-tier digital
                        strategies that transcend expectations, ensuring your
                        brand&apos;s online success.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Speedy Results:
                      </span>
                      <span>
                        Understanding the importance of timely delivery, our
                        streamlined processes promise swift execution without
                        compromising on the quality of our services.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Tailored Solutions:
                      </span>
                      <span>
                        Recognizing that each business is unique, we customize
                        our strategies to precisely fit your specific
                        requirements, whether it&apos;s comprehensive digital
                        branding or targeted marketing campaigns.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Budget-Friendly Services:
                      </span>
                      <span>
                        We firmly believe that high-quality digital marketing
                        shouldn&apos;t be a luxury. Our competitive pricing
                        structure is designed to accommodate various budgets
                        without compromising on the quality of our services.
                      </span>
                    </div>
                    <div className="space-x-1">
                      <span className="text-2xl text-primary-main font-semibold">
                        Client-Centric Approach:
                      </span>
                      <span>
                        Your success is our ultimate goal. We work closely with
                        you, incorporating your vision and objectives into every
                        aspect of our strategies, ensuring that your digital
                        presence aligns seamlessly with your business goals.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative grid grid-cols-2 gap-16"
                data-aos="zoom-in"
              >
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
                    src="/images/robert.jpg"
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
            </div>
          </div>
        </div>

        <ContactCard text="Let's Create Together" />
      </div>
    </div>
  );
}
