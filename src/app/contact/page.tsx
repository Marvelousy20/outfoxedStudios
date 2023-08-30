import Image from "next/image";
import Title from "../components/Title";
import Moon2 from "../../../public/images/Moon2.svg";

export default function Contact() {
  return (
    <div className="bg-background pt-48 pb-24">
      <div className="as absolute inset-0 isolate aspect-[1.5]">
        <Image
          src={Moon2}
          alt=""
          className="absolute top-0-z-10 object-cover bg-neutral-900"
          priority
        />
        <div className="bg-blend-hard-light mix-blend-hard absolute inset-0 bg-gradient-to-b from-[rgba(13,22,27,0.30)] to-[rgba(13,22,27,0.30)]" />
      </div>
      <div className="text-white max-w-5xl mx-auto text-center relative z-10 pb-24">
        <Title title="Let's talk" />
        <div className="text-7xl font-bold mt-5">
          <div className="inline-flex">
            <h3>Talk to us</h3>
            <span>
              <Image
                src="/images/blast.png"
                alt="blast"
                width="90"
                height="90"
                priority
              />
            </span>
          </div>

          <h3 className="">Get the help you need!</h3>
          <p className="text-sm text-offwhite mt-4">
            Take your brand to the next level, by hiring me!
          </p>
        </div>
      </div>

      <div className="relative">
        <div>
          <img src="/images/line.png" className="absolute inset-0 w-full" />
        </div>
        <form
          action=""
          className="grid gap-y-8 mt-40 pb-12 max-w-[48.75rem] mx-auto relative"
        >
          <h3 className="text-2xl font-bold text-white">
            Say Hello to Outfoxed Studios
          </h3>
          <div>
            <input
              type="text"
              placeholder="My name is..."
              required
              className="w-full p-4 rounded-lg border border-stone-500 bg-background border-opacity-25 focus:border-stone-500 outline-none transition-all ease-in duration-300"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="and here is my email"
              required
              className="w-full p-4 rounded-lg border bg-background border-stone-500 border-opacity-25 focus:border-stone-500 outline-none transition-all ease-in duration-300"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="this is the service I need"
              required
              className="w-full p-4 rounded-lg border border-stone-500 bg-background border-opacity-25 focus:border-stone-50 outline-none transition-all ease-in duration-300"
            />
          </div>

          <div>
            <textarea
              placeholder="Tell us more about the project"
              required
              className="w-full p-4 rounded-lg border border-stone-500 bg-background border-opacity-25 focus:border-stone-50 outline-none transition-all ease-in duration-300"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-[200px] gap-1 text-white px-6 py-3 bg-orange-600 rounded-lg hover:bg-opacity-50 justify-center transition-all ease-in duration-300"
          >
            Submit
            <img src="/images/blast2.png" alt="blast" className="h-6 w-6" />
          </button>

          <small>We respond within 24 hours</small>
        </form>
      </div>

      <div className="max-w-4xl text-white text-center z-10 mx-auto lg:mt-44 bg-card bg-opacity-75 rounded-3xl backdrop-blur-xl lg:px-28 lg:py-24">
        <Title title="Contact us" />
        <h3 className="text-center text-4xl font-bold mb-2">
          Conquer the content world and make your mark in your industry!
        </h3>
        <p className="text-lg font-normal leading-relaxed text-offwhite">
          let us tailor a content solution that propels you towards success.
        </p>
      </div>
    </div>
  );
}
