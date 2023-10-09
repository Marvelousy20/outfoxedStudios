import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Website Services",
    number: "01",
    servicesRendered: [
      {
        img: "/images/animation.png",
        name: "Frontend development",
      },
      {
        img: "/images/animation.png",
        name: "Backend development",
      },
      {
        img: "/images/animation.png",
        name: "Search Engine Optimization (SEO)",
      },
      {
        img: "/images/animation.png",
        name: "Keyword Research",
      },
      {
        img: "/images/animation.png",
        name: "Content Creation",
      },
      {
        img: "/images/animation.png",
        name: "Copy Writing",
      },
      {
        img: "/images/animation.png",
        name: "Script Writing and Storyboarding",
      },
      {
        img: "/images/animation.png",
        name: "Custom Applications Development",
      },
      {
        img: "/images/animation.png",
        name: "Animation (3D Animation) ",
      },
    ],
  },

  {
    title: "Social Media Management",
    number: "02",
    servicesRendered: [
      {
        img: "/images/videoEditing.png",
        name: "Content Optimization",
      },
      {
        img: "/images/videoEditing.png",
        name: "Website and Channel Optimization for Social Media",
      },
      {
        img: "/images/videoEditing.png",
        name: "Title/Tags/Description Optimization for Video Uploads",
      },
      {
        img: "/images/videoEditing.png",
        name: "Content Creation and Ads",
      },
      {
        img: "/images/videoEditing.png",
        name: "Marketing Services",
      },
      {
        img: "/images/videoEditing.png",
        name: "Marketing Campaigns",
      },
      {
        img: "/images/videoEditing.png",
        name: "Video Editing",
      },
    ],
  },
  {
    title: "Application Development",
    number: "03",
    servicesRendered: [
      {
        img: "/images/graphicdesign.png",
        name: "Android App Development",
      },
      {
        img: "/images/graphicdesign.png",
        name: "iOS App Development",
      },
      {
        img: "/images/graphicdesign.png",
        name: "Game Development",
      },
    ],
  },
];

export default function MobileService() {
  return (
    <div className="mt-10">
      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          <div className="text-primary-main font-bold items-center gap-6 inline-flex">
            <div className="text-2xl">01.</div>
            <div className="text-2xl">Website Services</div>
          </div>
        </div>
        <div className="collapse-content">
          {services[0].servicesRendered.map((service, i) => (
            <div key={i} className="flex flex-col items-center mb-4">
              <Image src={service.img} alt="img" width="40" height="40" />
              <p>{service.name}</p>
            </div>
          ))}
           <div className="mt-12 font-semibold text-center flex justify-center">
              <Link
                href="/contact"
                className="text-primary-main !w-full border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300"
              >
                Hire me
              </Link>
            </div>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          <div className="py-16 font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-2xl">02.</div>
            <div className="text-2xl">Social Media Management</div>
          </div>
        </div>
        <div className="collapse-content">
          {services[1].servicesRendered.map((service, i) => (
            <div key={i} className="flex flex-col items-center mb-4">
              <Image src={service.img} alt="img" width="40" height="40" />
              <p className="text-center">{service.name}</p>
            </div>
          ))}
           <div className="mt-12 font-semibold text-center flex justify-center">
              <Link
                href="/contact"
                className="text-primary-main !w-full border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300"
              >
                Hire me
              </Link>
            </div>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
        <div className="font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-2xl">03.</div>
            <div className="text-2xl">Application Development</div>
          </div>
        </div>
        <div className="collapse-content">
          {services[2].servicesRendered.map((service, i) => (
            <div key={i} className="flex flex-col items-center mb-4">
              <Image src={service.img} alt="img" width="40" height="40" />
              <p className="text-center">{service.name}</p>
            </div>
          ))}
           <div className="mt-12 font-semibold text-center flex justify-center">
              <Link
                href="/contact"
                className="text-primary-main !w-full border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300"
              >
                Hire me
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
