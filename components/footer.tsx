import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link className="flex sm:h-10" href="/">
            <Image
              priority
              src="/images/flow.svg"
              height={62}
              width={56}
              alt="Flow Ease"
            />
          </Link>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">
              Product
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Features</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Integrate</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Customers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">
              Resource
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Getting started with FlowEase
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">
              Support
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Help Center</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms & Services
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2023 FlowEase | Privacy Policy
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0  mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.11999 3.32003H11V0.14003C10.0897 0.045377 9.17514 -0.00135428 8.25999 2.98641e-05C5.53999 2.98641e-05 3.67999 1.66003 3.67999 4.70003V7.32003H0.609985V10.88H3.67999V20H7.35998V10.88H10.42L10.88 7.32003H7.35998V5.05003C7.35998 4.00003 7.63999 3.32003 9.11999 3.32003Z"
                  fill="#1C1D1D"
                />
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.27998 5.09 4.10998 3.38 1.99998 0.79C1.62998 1.42 1.41998 2.16 1.41998 2.94C1.41998 4.43 2.16998 5.75 3.32998 6.5C2.61998 6.5 1.95998 6.3 1.37998 6V6.03C1.37998 8.11 2.85998 9.85 4.81998 10.24C4.19071 10.4122 3.53007 10.4362 2.88998 10.31C3.16158 11.1625 3.69351 11.9084 4.41099 12.4429C5.12847 12.9775 5.99543 13.2737 6.88998 13.29C5.37361 14.4904 3.49397 15.1393 1.55998 15.13C1.21998 15.13 0.879978 15.11 0.539978 15.07C2.43998 16.29 4.69998 17 7.11998 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z"
                  fill="#1C1D1D"
                />
              </svg>
            </a>
            <a className="ml-5 text-gray-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z"
                  fill="#1C1D1D"
                />
              </svg>
            </a>
            <a className="ml-5 text-gray-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z"
                  fill="#1C1D1D"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
