"use client";
import Image from "next/image";
import Title from "../components/Title";
import Moon2 from "../../../public/images/Moon2.svg";
import { useForm, ValidationError } from "@formspree/react";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Contact() {
  const [state, handleSubmit] = useForm("moqopvdg");

  if (state.succeeded) {
    return (
      <div className="text-white flex flex-col justify-center items-center text-center h-[80vh] mb-32">
        <BsFillCheckCircleFill size={80} color="green" />
        <p className="text-xl md:text-3xl">Form submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="bg-background px-4 md:px-0 pt-16 md:pt-28 lg:pt-48 pb-24">
      <div className="as absolute inset-0 isolate aspect-[1.5] bg-background">
        <Image
          src={Moon2}
          alt=""
          className="absolute top-0 -z-10 object-cover bg-neutral-900 opacity-10"
          priority
        />
        <div className="bg-blend-hard-light mix-blend-hard absolute inset-0 bg-gradient-to-b from-[rgba(13,22,27,0.30)] to-[rgba(13,22,27,0.30)]" />
      </div>
      <div className="text-white max-w-5xl mx-auto text-start md:text-center relative z-10 pb-24">
        <Title title="Let's talk" />
        <div className="text-5xl lg:text-7xl font-bold mt-5 text-primary50">
          <div className="inline-flex gap-4">
            <h3>Talk to us</h3>
            <span>
              <Image
                src="/images/blast.png"
                alt="blast"
                width="90"
                height="90"
                priority
                className="hidden lg:block"
              />
              <Image
                src="/images/blast.png"
                alt="blast"
                width="50"
                height="50"
                priority
                className="block lg:hidden mt-1"
              />
            </span>
          </div>

          <h3 className="">Get the help you need</h3>
          <p className="text-sm text-offwhite mt-4">
            Take your brand to the next level, by hiring us!
          </p>
        </div>
      </div>

      <div className="relative">
        <div>
          <img src="/images/line.png" className="absolute inset-0 w-full" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-y-8 pb-12 max-w-[48.75rem] mx-auto relative text-white"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            Say Hello to Outfoxed Productions
          </h3>
          <div>
            <input
              type="text"
              placeholder="My name is..."
              required
              id="text"
              name="name"
              className="w-full p-4 rounded-lg border border-stone-500 bg-background border-opacity-25 focus:border-stone-500 outline-none transition-all ease-in duration-300"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <input
              type="email"
              placeholder="and here is my email"
              name="email"
              required
              className="w-full p-4 rounded-lg border bg-background border-stone-500 border-opacity-25 focus:border-stone-500 outline-none transition-all ease-in duration-300"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="this is the service I need"
              name="service"
              required
              className="w-full p-4 rounded-lg border border-stone-500 bg-background border-opacity-25 focus:border-stone-50 outline-none transition-all ease-in duration-300"
            />
            <ValidationError
              prefix="Service"
              field="service"
              errors={state.errors}
            />
          </div>

          <div>
            <textarea
              placeholder="Tell us more about the project"
              required
              name="about"
              className="w-full p-4 rounded-lg border border-stone-500 bg-background border-opacity-25 focus:border-stone-50 outline-none transition-all ease-in duration-300"
            />
            <ValidationError
              prefix="About"
              field="about"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-[200px] gap-1 text-white px-6 py-3 bg-orange-600 rounded-lg hover:opacity-50 justify-center transition-all ease-in duration-300 hover:shadow-hard"
            disabled={state.submitting}
          >
            Submit
            <img src="/images/blast2.png" alt="blast" className="h-6 w-6" />
          </button>

          <small>We respond within 24 hours</small>
        </form>
      </div>
    </div>
  );
}
