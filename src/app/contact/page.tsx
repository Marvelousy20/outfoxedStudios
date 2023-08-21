import Image from "next/image";
import Title from "../components/Title";
import Moon2 from "../../../public/images/Moon2.svg";

export default function Contact() {
  return (
    <div className="bg-background py-20">
      <div className="as absolute inset-0 isolate aspect-[1.5]">
        <Image
          src={Moon2}
          alt=""
          className="absolute top-0-z-10 object-cover bg-neutral-900"
          priority
        />
        <div className="bg-blend-hard-light mix-blend-hard absolute inset-0 bg-gradient-to-b from-[rgba(13,22,27,0.30)] to-[rgba(13,22,27,0.30)]" />
      </div>
      <div className="text-white max-w-lg mx-auto text-center relative z-10">
        <Title title="Let's talk about you and your business" />
        <h3 className="text-5xl font-bold">Say Hello to Outfoxed Studios</h3>
        <form action="" className="grid gap-y-8 py-12">
          <div>
            <input
              type="text"
              placeholder="My name is..."
              required
              className="w-full p-4 rounded-lg border border-stone-500 border-opacity-25"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="and here is my email"
              required
              className="w-full p-4 rounded-lg border border-stone-500 border-opacity-25"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="this is the service I need"
              required
              className="w-full p-4 rounded-lg border border-stone-500 border-opacity-25"
            />
          </div>

          <div>
            <textarea
              placeholder="Tell us more about the project"
              required
              className="w-full p-4 rounded-lg border border-stone-500 border-opacity-25"
            />
          </div>

          <button
            type="submit"
            className="inline-flex px-6 py-3 bg-orange-600 rounded-lg hover:opacity-50 justify-center"
          >
            Submit <img src="/images/blast2.png" alt="blast" />
          </button>
        </form>
      </div>
    </div>
  );
}
