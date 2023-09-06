import Image from "next/image";

const svgImage = (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="30"
      viewBox="0 0 41 30"
      fill="none"
    >
      <path
        d="M9.03067 33.7879C9.30321 33.0445 9.74647 31.959 10.0431 30.6632L10.0431 30.6631C10.6349 28.0758 11.0007 24.7983 11.0007 22.0916C11.0007 19.3756 10.6283 17.8859 10.1423 17.0907C9.97 16.7839 9.71205 16.534 9.39986 16.3715L9.3845 16.3635L9.36863 16.3566C9.06572 16.2246 8.73705 16.1626 8.307 16.175C8.02909 16.176 7.71236 16.2351 7.44538 16.3661L7.44531 16.366L7.43478 16.3715C7.12259 16.534 6.86463 16.7839 6.69238 17.0907C6.2063 17.8859 5.83399 19.3756 5.83399 22.0916C5.83399 24.7969 6.20141 28.0742 6.79149 30.6628L6.79156 30.663C7.08819 31.9608 7.43146 33.0446 7.79397 33.7879C7.862 33.9294 7.92702 34.0484 7.98717 34.1499L8.41732 34.8757L8.84747 34.1499C8.90762 34.0484 8.97264 33.9294 9.03067 33.7879ZM9.03067 33.7879C9.03089 33.7874 9.0411 33.787 9.04132 33.7865L8.79779 33.6695M9.03067 33.7879C9.03045 33.7883 9.03023 33.7888 9.03001 33.7892L8.79636 33.6703M8.79779 33.6695L8.79636 33.6703M8.79779 33.6695L8.84747 33.6301C8.80114 33.5619 8.74972 33.468 8.69466 33.3534L8.69334 33.3507C8.69317 33.3503 8.693 33.35 8.69282 33.3496C8.69258 33.3502 8.69234 33.3507 8.69209 33.3513C8.69146 33.3527 8.69084 33.3541 8.69021 33.3555C8.65709 33.4303 8.6239 33.5018 8.59065 33.57M8.79779 33.6695L8.59065 33.57M8.79636 33.6703L8.59065 33.57M8.79636 33.6703L8.41732 33.895C8.47065 33.805 8.52899 33.6983 8.59065 33.57M9.57531 3.90709L9.57565 3.90725C9.70297 3.96847 9.8104 4.06439 9.88559 4.18399L10.3089 3.91786L9.88559 4.18399C9.96078 4.30358 10.0007 4.44198 10.0007 4.58325V4.5833C10.0007 6.12827 10.6002 7.03301 11.2573 8.01213L11.2573 8.01215L11.2609 8.01739L11.3074 8.08481C11.8615 8.90924 12.5007 9.8734 12.5007 11.25C12.5007 12.6543 11.7933 13.8925 10.7126 14.6283L10.1661 15.0004L10.6729 15.4249C10.9469 15.6545 11.1944 15.9411 11.4121 16.293C12.1295 17.4536 12.5007 19.2976 12.5007 22.0916C12.5007 24.9081 12.1214 28.2974 11.5049 30.997L11.5048 30.9972C11.1984 32.3414 10.8236 33.5541 10.3894 34.4461L10.3893 34.4461L10.3851 34.4553C10.1913 34.8749 9.93502 35.2626 9.62502 35.6053C9.32941 35.9061 8.92419 36.175 8.41732 36.175C7.90995 36.175 7.50464 35.9055 7.21128 35.6054C6.90056 35.2637 6.64437 34.8762 6.45176 34.4564L6.45189 34.4564L6.44673 34.4458C6.01121 33.5527 5.63655 32.3424 5.33028 30.9975C4.68807 28.0707 4.35415 25.0847 4.33399 22.0883C4.33413 19.2952 4.70531 17.4532 5.42262 16.2929L5.42263 16.2929L5.42463 16.2896C5.62313 15.9629 5.87287 15.6702 6.16428 15.4228L6.66543 14.9972L6.1215 14.628C5.57036 14.2538 5.11927 13.7503 4.80767 13.1615C4.49606 12.5727 4.33343 11.9165 4.33399 11.2504V11.25V11.2493C4.33399 10.6591 4.33399 9.69302 4.92504 8.4322L4.92505 8.43218C5.50841 7.18768 6.63843 5.71307 8.78131 3.99709C8.89172 3.90877 9.02484 3.85346 9.16533 3.83754C9.30581 3.82161 9.44794 3.84572 9.57531 3.90709ZM9.99334 8.81928L9.99334 8.81927L9.99203 8.81732C9.6094 8.24922 9.1896 7.62202 8.89271 6.82256L8.61896 6.08544L8.06754 6.646C7.13007 7.59901 6.59438 8.30785 6.28471 9.06749L6.28463 9.06766C5.8342 10.0281 5.83399 10.7301 5.83399 11.2483C5.83399 11.933 6.10586 12.5919 6.59063 13.0767C7.0751 13.5611 7.73218 13.8333 8.41732 13.8333C9.10246 13.8333 9.75954 13.5611 10.244 13.0767C10.7285 12.5922 11.0007 11.9351 11.0007 11.25C11.0007 10.3459 10.5986 9.71978 10.0128 8.84848C10.0126 8.84821 10.0124 8.84793 10.0123 8.84766L9.99334 8.81928ZM15.1651 22.1129C15.7564 22.4181 16.3908 22.6516 17.0568 22.8026L17.6673 22.941V22.315V17.5C17.6673 16.9695 17.878 16.4608 18.2531 16.0858C18.6282 15.7107 19.1369 15.5 19.6673 15.5H26.334H26.834L26.834 14.9999C26.8339 13.5078 26.4165 12.0455 25.629 10.7781C24.8415 9.51078 23.7153 8.48891 22.3775 7.82799C21.0398 7.16707 19.5439 6.89344 18.0588 7.03802C16.7886 7.16168 15.5697 7.58707 14.502 8.27479C14.2622 7.75261 13.9943 7.31439 13.7655 6.96499C15.0958 6.12586 16.6159 5.62873 18.1902 5.5218C19.9266 5.30384 21.6622 5.7652 23.2073 6.56642C24.7524 7.36765 26.0477 8.57794 26.9517 10.0652C27.8558 11.5524 28.334 13.2595 28.334 15V15.5H28.834H34.6673C35.1978 15.5 35.7065 15.7107 36.0815 16.0858C36.4566 16.4608 36.6673 16.9695 36.6673 17.5V32.5C36.6673 33.0304 36.4566 33.5391 36.0815 33.9142C35.7065 34.2893 35.1978 34.5 34.6673 34.5H19.6673C19.1369 34.5 18.6282 34.2893 18.2531 33.9142C17.878 33.5391 17.6673 33.0304 17.6673 32.5V25.4541V24.8633V24.8616H17.1676L17.25 24.3702C16.521 24.2479 15.8094 24.0304 15.1295 23.7522C15.1529 23.206 15.1648 22.6595 15.1651 22.1129ZM19.6254 24.4701L19.1673 24.5086V24.9683V32.5016V33.0016H19.6673H34.6673H35.1673V32.5016V17.5016V17.0016H34.6673H28.5173H28.1302L28.0332 17.3765C27.5399 19.2845 26.4658 20.992 24.9595 22.2629C23.4533 23.5337 21.5893 24.305 19.6254 24.4701ZM26.3787 17.6685L26.6147 17.0016H25.9073H19.6673H19.1673V17.5016V22.4566V23.0158L19.723 22.9535C21.2166 22.7861 22.6329 22.2016 23.8099 21.267C24.987 20.3323 25.8771 19.0853 26.3787 17.6685Z"
        fill="#304D56"
        stroke="#7DD2FF"
      />
    </svg>
  </span>
);

export default function MobileMentorship() {
  const data = [ 
    {
      img: "/images/video.svg",
      text: "Content Marketing Strategies"
    },
    {
      img: "/images/video.svg",
      text: "Content Performance Analysis"
    },
    {
      img: "/images/video.svg",
      text: "Title / Driscription Optimization"
    },
    {
      img: "/images/video.svg",
      text: "Thumbnail Optimization"
    },
  ]

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
          {data.map((d, index) => (
            <div key={index} className="mb-4">
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
          {data.map((d, index) => (
            <div key={index} className="mb-4">
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
          {data.map((d, index) => (
            <div key={index} className="mb-4 space-y-2">
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
    </div>
  );
}
