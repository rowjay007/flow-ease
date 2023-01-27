import Image from "next/image";
import Link from "next/link";
import React from "react";

const Integrate = () => {
  return (
    <div className="bg-[#F4F4F4]">
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
                Suspendisse
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrate;
