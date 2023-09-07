import Image from "next/image";
import { data } from "../mentorshipData";

export default function MobileMentorship() {

  return (
    <div className="mt-10">
      <h3 className="font-bold mt-1">Get Mentorship on:</h3>
      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-1" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          <div className="text-primary-main font-bold items-center gap-6 inline-flex">
            <div className="text-xl">01.</div>
            <div className="text-xl">Youtube Services</div>
          </div>
        </div>
        <div className="collapse-content">
          {data[0].data.map((d, index) => (
            <div key={index} className="mb-4 space-y-2 md:flex flex-col justify-center">
              <Image
                src={d.img}
                alt="video"
                width="30"
                height="30"
              />
              <p>
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-1" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          <div className="font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-xl">02.</div>
            <div className="text-xl">Tiktok Services</div>
          </div>
        </div>
        <div className="collapse-content">
          {data[1].data.map((d, index) => (
            <div key={index} className="mb-4 space-y-2 md:flex flex-col justify-center">
              <Image
                src={d.img}
                alt="video"
                width="30"
                height="30"
              />
              <p>
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 !bg-transparent">
        <input type="radio" name="my-accordion-1" defaultChecked="checked" />
        <div className="collapse-title text-xl font-medium">
          <div className="font-bold justify-start items-center gap-6 inline-flex">
            <div className="text-xl">03.</div>
            <div className="text-xl">Streaming Services</div>
          </div>
        </div>
        <div className="collapse-content">
          {data[2].data.map((d, index) => (
            <div key={index} className="mb-4 space-y-2 md:flex flex-col justify-center">
              <div>
              <Image
                src={d.img}
                alt="video"
                width="30"
                height="30"
                className="md:inline-block"
              />
              </div>
               <br />
              <p>
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
