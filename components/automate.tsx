import Image from "next/image";
import React from "react";

const Automate = () => {
    return (
      <section
        className="h-[496px] bg-[#DFE4E8]
"
      >
        <div className="container mx-auto flex flex-col pt-32   items-center text-center md:p-10 lg:flex-row ">
          <div className=" pt-2">
            <Image
              priority
              src="/images/spin.png"
              height={115}
              width={115}
              alt="spin"
            />
          </div>
          <div className="flex flex-col  text-center lg:text-left justify-center pt-32 ml-32 ">
            <p className="text-4xl font-semibold  leading-none text-[#1C1D1D]">
              Unlock the power of automation and <br />
              streamline your workflow with EfficiencyEase - <br /> Try it now!
            </p>

            <button
              type="button"
              className="text-white mt-[79px] h-[64px] w-[266px] bg-gradient-to-r from-[#0077C9] to-[#00B5E2] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Get started for free{" "}
              <span>
                <svg
                  className="inline-block ml-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    );
};

export default Automate;
