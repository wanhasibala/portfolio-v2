import React from "react";

const Hero = () => {
  return (
    <section className="w-[100vw] h-[100vh] px-6 md:px-12 lg:px-20 flex relative overflow-hidden">
    <div className="absolute  left-[50%] translate-x-[-50%] z-1">
        <svg
          width="668"
          height="668"
          viewBox="0 0 668 668"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_926_33)">
            <circle
              cx="334"
              cy="334"
              r="250"
              fill="url(#paint0_linear_926_33)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_926_33"
              x="0"
              y="0"
              width="668"
              height="668"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="42"
                result="effect1_foregroundBlur_926_33"
              />
            </filter>
            <linearGradient
              id="paint0_linear_926_33"
              x1="475"
              y1="126"
              x2="130"
              y2="554.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BE6B5C" stop-opacity="0.2" />
              <stop offset="0.251921" stop-color="#BE6B5C" />
              <stop offset="1" stop-color="#79312F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* hero section */}
      <div className=" mt-[160px] z-4  h-[60vh] flex flex-col justify-between w-full ">
        {/* Hero text */}
        <div className="flex flex-col dark:bg-[#171717] dark:bg-opacity-30 bg-[#f8f8f8] bg-opacity-30 p-2.5 rounded-[20px] backdrop-blur-xl z-10">
            <h1 className="text-title font-bold lg:max-w-[800px] ">Hi, Im Wan Hasib</h1>
            <p className="text-xl lg: max-w-[650px]">Creative web designer & tech enthusiast</p>
        </div>
            <p className="text-xl mt-10 z-10 md:max-w-[600px]">Empowering online entrepreneurs to craft standout products with innovative design and strategic development. Let&apos;s create something remarkable together.</p>
      </div>
    </section>
  );
};

export default Hero;
