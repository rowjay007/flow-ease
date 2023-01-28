import Image from "next/image";
import React from "react";


const Header = () => {
  return (
    <section className="text-gray-600 body-font bg-[#F4F4F4]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Streamline your workflow, simplify your life
            {/* <br className="hidden lg:inline-block" readymade gluten /> */}
          </h1>
          <p className="mb-8 leading-relaxed">
            FlowEase streamlines your business workflow and automates repetitive
            tasks. Integrate calendar, email, contacts, and other business tools
            for a seamless workflow. User-friendly interface, automated
            reminders and contact management included. Simplify your business
            management with FlowEase.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-gradient-to-r from-[#0077C9] to-[#00B5E2] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            priority
            src="/images/cuate.png"
            height={505}
            width={483}
            alt="cuate"
          />

          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Header;


