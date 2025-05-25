import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // First text animation - sliding left
    gsap.to(firstTextRef.current, {
      x: "-=300",
      scrollTrigger: {
        trigger: firstTextRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Second text animation - sliding right
    gsap.to(secondTextRef.current, {
      x: "+=300",
      scrollTrigger: {
        trigger: secondTextRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const runningText = ["FE", "UI", "CSS", "JS", "FE", "UI", "CSS", "JS"];
  return (
    <section className="w-[100vw]  px-6 md:px-12 lg:px-20 flex relative  ">
      <div className="  left-[50%] translate-x-[-50%] "></div>
      <div className="text-xl hidden md:block">
        <div className="absolute left-[15%] top-[25%]">FE</div>
        <div className="absolute left-[20%] top-[45%]">UI</div>
        <div className="absolute left-[85%] top-[25%]">CSS</div>
        <div className="absolute left-[75%] top-[45%]">JS</div>
        {/* hero section */}
      </div>
      <div className=" mt-[160px] z-10   flex flex-col justify-between w-full ">
        {/* Hero text */}
        <div className="flex flex-col  p-2.5 rounded-[20px] justify-center items-center">
          <h1 className="text-title/none font-semibold text-center max-w-[1200px]  z-1">
            WAN HASIB AL ASLAMY
          </h1>

          <div className="flex flex-col relative items-center">
            <div className="-mt-4 sm:-mt-8 md:-mt-12 shadow-[0_-20px_50px_rgba(11,_11,_11)] w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-square inset-0 bg-[#7580A8] z-[2] rounded-full">
              <Image
                src="/image 2.png"
                alt="Hero Image"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-full -mt-10"
                priority
              />
            </div>
            <div className="absolute bottom-10 w-[110vw]  bg-[#F6AC9F] h-20 sm:h-24 md:h-28 lg:h-32 -mt-40 rotate-6 z-[1] flex   justify-between items-center">
              <div
                ref={firstTextRef}
                className="flex gap-0 w-full justify-center items-center h-full"
              >
                {runningText.map((text, index) => (
                  <div
                    key={index}
                    className="flex  gap-10 mr-10 md:gap-20 md:mr-20 lg:gap-40 lg:mr-40 items-center text-4xl"
                  >
                    <div className="text-4xl font-bold text-black">{text}</div>
                    <svg
                      width="46"
                      height="50"
                      viewBox="0 0 46 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41.7474 31.7954C44.681 33.8825 45.3409 36.0672 43.7271 38.3495C42.9627 39.4936 41.9787 40.1091 40.7751 40.1961C39.5714 40.283 38.3153 39.8957 37.0069 39.0344C35.3699 37.9789 33.7567 36.583 32.1673 34.8466C30.5778 33.1101 28.2887 30.9826 25.2997 28.464C25.3605 32.4887 25.5688 35.6255 25.9248 37.8745C26.3719 40.0443 26.524 42.1507 26.3811 44.1937C26.268 45.8111 25.7531 47.0582 24.8364 47.9351C24.0048 48.8179 22.9505 49.2146 21.6737 49.1254C20.3116 49.0301 19.2803 48.4875 18.5797 47.4976C17.879 46.5076 17.5852 45.2039 17.6983 43.5866C17.8412 41.5435 18.2424 39.4758 18.902 37.3834C19.6526 35.2118 20.3381 32.1375 20.9584 28.1604C17.648 30.2385 15.085 32.0268 13.2694 33.5251C11.4538 35.0234 9.66199 36.1813 7.89401 36.9986C6.47843 37.6695 5.18071 37.8781 4.00086 37.6245C2.82101 37.371 1.93225 36.6245 1.33458 35.3851C0.0541163 32.9004 0.96906 30.8258 4.07941 29.1614C5.93252 28.35 7.94696 27.6783 10.1227 27.1461C12.3836 26.6198 15.3978 25.7186 19.1653 24.4423C15.6181 22.5689 12.7616 21.2144 10.5959 20.3786C8.51542 19.5488 6.61409 18.6032 4.89193 17.5418C2.12862 15.4666 1.51428 13.2424 3.04891 10.869C4.66867 8.50152 6.90574 8.31579 9.76013 10.3118C11.3972 11.3672 13.0104 12.7631 14.5998 14.4996C16.1892 16.236 18.4813 18.321 21.4762 20.7545C21.4036 16.9 21.1467 13.8453 20.7056 11.5904C20.3556 9.25629 20.249 7.1103 20.3859 5.15241C20.4931 3.62015 20.9624 2.41262 21.794 1.52981C22.6316 0.561878 23.7314 0.125533 25.0934 0.220774C26.3703 0.310062 27.3561 0.892244 28.0508 1.96732C28.8365 2.96323 29.1759 4.22731 29.0687 5.75957C28.9318 7.71746 28.4851 9.82476 27.7285 12.0815C27.0629 14.259 26.426 17.2512 25.8176 21.0581C29.122 19.065 31.682 17.3194 33.4976 15.821C35.3133 14.3227 37.1051 13.1649 38.873 12.3475C41.9774 10.7682 44.1669 11.2635 45.4414 13.8333C46.6308 16.3972 45.6703 18.5114 42.56 20.1758C40.792 20.9931 38.7775 21.6649 36.5166 22.1911C34.3409 22.7233 31.3663 23.6701 27.5928 25.0316C31.146 26.8198 33.9629 28.1288 36.0434 28.9586C38.2091 29.7944 40.1104 30.74 41.7474 31.7954Z"
                        fill="#576187"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-10 w-[110vw] bg-[#576187] h-20 sm:h-24 md:h-28 lg:h-32 -mt-40 -rotate-6 z-[4]">
              <div
                ref={secondTextRef}
                className="flex  w-full justify-center items-center h-full"
              >
                {runningText.map((text, index) => (
                  <div
                    key={index}
                    className="flex  gap-10 mr-10 md:gap-20 md:mr-20 lg:gap-40 lg:mr-40 items-center text-4xl"
                  >
                    <div className="text-4xl font-bold text-white">{text}</div>
                    <svg
                      width="46"
                      height="50"
                      viewBox="0 0 46 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.9759 32.3867C43.9095 34.4738 44.5694 36.6585 42.9556 38.9408C42.1912 40.0849 41.2072 40.7004 40.0036 40.7874C38.7999 40.8743 37.5439 40.487 36.2354 39.6257C34.5984 38.5702 32.9852 37.1743 31.3958 35.4379C29.8064 33.7014 27.5172 31.5739 24.5283 29.0553C24.589 33.08 24.7974 36.2168 25.1533 38.4658C25.6004 40.6356 25.7525 42.742 25.6096 44.785C25.4966 46.4024 24.9816 47.6495 24.0649 48.5264C23.2333 49.4092 22.1791 49.806 20.9022 49.7167C19.5402 49.6214 18.5088 49.0788 17.8082 48.0889C17.1075 47.0989 16.8138 45.7953 16.9269 44.1779C17.0697 42.1349 17.4709 40.0671 18.1305 37.9747C18.8811 35.8031 19.5666 32.7288 20.1869 28.7517C16.8765 30.8298 14.3135 32.6181 12.4979 34.1164C10.6823 35.6147 8.89051 36.7726 7.12252 37.5899C5.70694 38.2608 4.40923 38.4694 3.22937 38.2159C2.04952 37.9623 1.16076 37.2158 0.563094 35.9764C-0.717368 33.4917 0.197575 31.4171 3.30792 29.7527C5.16104 28.9413 7.17547 28.2696 9.35123 27.7374C11.6121 27.2111 14.6263 26.3099 18.3939 25.0336C14.8466 23.1602 11.9901 21.8057 9.82446 20.9699C7.74394 20.1401 5.8426 19.1945 4.12045 18.1331C1.35714 16.0579 0.742797 13.8337 2.27743 11.4603C3.89719 9.09283 6.13426 8.90709 8.98865 10.9031C10.6257 11.9585 12.2389 13.3544 13.8283 15.0909C15.4177 16.8273 17.7099 18.9123 20.7047 21.3458C20.6321 17.4913 20.3752 14.4366 19.9341 12.1817C19.5841 9.8476 19.4775 7.70161 19.6144 5.74372C19.7216 4.21146 20.191 3.00393 21.0226 2.12112C21.8601 1.15319 22.9599 0.716842 24.3219 0.812083C25.5988 0.901371 26.5846 1.48355 27.2793 2.55863C28.0651 3.55454 28.4044 4.81862 28.2972 6.35088C28.1603 8.30877 27.7136 10.4161 26.957 12.6728C26.2914 14.8503 25.6545 17.8425 25.0461 21.6494C28.3505 19.6563 30.9106 17.9107 32.7262 16.4123C34.5418 14.914 36.3336 13.7562 38.1016 12.9388C41.206 11.3595 43.3954 11.8548 44.6699 14.4246C45.8593 16.9885 44.8988 19.1027 41.7885 20.7671C40.0205 21.5844 38.006 22.2562 35.7452 22.7825C33.5694 23.3146 30.5948 24.2614 26.8213 25.6229C30.3745 27.4111 33.1914 28.7201 35.2719 29.5499C37.4376 30.3857 39.3389 31.3313 40.9759 32.3867Z"
                        fill="#DE8E80"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
