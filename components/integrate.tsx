import Image from "next/image";
import Link from "next/link";
import React from "react";

const Integrate = () => {
  return (
    <div className="bg-[#fffff]">
      <section className="bg-no-repeat bg-left  bg-[url('/images/circle1.png')]">
        <h1 className="text-3xl p-12 font-bold text-[#1C1D1D] text-center capitalize group-hover:text-white lg:text-4xl ">
          Integrate with the Worlds <br />
          leading business tools
        </h1>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-32 lg:flex-row ">
          <div className="flex items-center justify-center ">
            {/* <Image
            priority
            className="  "
            src="/images/circle.png"
            height={471}
            width={525}
            alt="Flow Ease"
          /> */}
            <Image
              priority
              className="  "
              src="/images/inter.png"
              height={471}
              width={525}
              alt="Flow Ease"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              FlowEase integrates with popular business tools such as Google
              Calendar, Trello, and Slack to create a seamless workflow
              experience. FlowEase is designed to save users time and reduce the
              stress of managing multiple business tools.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="px-8 border border-[#0077C9] text-[#0077C9] py-3 text-lg font-semibold rounded"
              >
                Learn more
                <span>
                  <svg
                    className="inline-block"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 12.5H19.5"
                      stroke="url(#paint0_linear_83_167)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 5.5L19.5 12.5L12.5 19.5"
                      stroke="url(#paint1_linear_83_167)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_83_167"
                        x1="8.05346"
                        y1="12.7394"
                        x2="8.35901"
                        y2="14.8553"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0077C9" />
                        <stop offset="1" stop-color="#00B5E2" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_83_167"
                        x1="13.7767"
                        y1="8.85211"
                        x2="20.8245"
                        y2="10.5951"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0077C9" />
                        <stop offset="1" stop-color="#00B5E2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrate;
