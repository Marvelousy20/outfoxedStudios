import Image from "next/image";



export default function MobileService() {
  return (
    <div className="mt-10">
      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          <div className="text-primary-main font-bold items-center gap-6 inline-flex">
            <div className="text-2xl">01.</div>
            <div className="text-2xl">Youtube Services</div>
          </div>
        </div>
        <div className="collapse-content">
        <div className="mb-4">
            <Image
              src="/images/videoEditing.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-lg font-semibold leading-relaxed">
              Video Editing
            </p>
            <div className="text-offwhite font-normal leading-relaxed grid mb-4">
              <span>- Short</span>
              <span>- Full length videos</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          <div className="py-16 font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-2xl">02.</div>
            <div className="text-2xl">Tiktok Services</div>
          </div>
        </div>
        <div className="collapse-content">
          <div className="mb-4">
            <Image
              src="/images/consulting.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-lg font-semibold leading-relaxed">
              Consulting & Coaching
            </p>
            <div className="text-offwhite font-normal leading-relaxed grid mb-4">
              <span>- Content Ideation</span>
              <span>- Content Strategy</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>

          <div>
            <Image
              src="/images/animation.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-lg font-semibold leading-relaxed">
              3d Animation
            </p>
            <div className="text-offwhite font-normal leading-relaxed grid mb-4">
              <span>- Short</span>
              <span>- Full length</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-2" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
        <div className="font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-2xl">03.</div>
            <div className="text-2xl">Streaming Services</div>
          </div>
        </div>
        <div className="collapse-content">
          <div className="mb-4">
            <Image
              src="/images/consulting.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-lg font-semibold leading-relaxed">
              Consulting & Coaching
            </p>
            <div className="text-offwhite font-normal leading-relaxed grid mb-4">
              <span>- Content Ideation</span>
              <span>- Content Strategy</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>

          <div>
            <Image
              src="/images/animation.png"
              alt="video"
              width="40"
              height="40"
            />
            <p className="text-lg font-semibold leading-relaxed">
              3d Animation
            </p>
            <div className="text-offwhite font-normal leading-relaxed grid mb-4">
              <span>- Short</span>
              <span>- Full length</span>
            </div>
            <button className="text-primary-main border rounded border-primary50 text-lg px-4 py-2 hover:bg-primary-main hover:text-white hover:border-none transition-all ease-in-out duration-300">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
