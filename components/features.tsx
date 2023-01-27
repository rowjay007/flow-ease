import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-[#F4F4F4] ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold text-[#1C1D1D] text-center capitalize group-hover:text-white lg:text-4xl ">
          We provide the best features
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 hover:bg-gradient-to-r from-[#0077C9] to-[#00B5E2] group shadow-lg rounded-xl ">
            <span className="inline-block  ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.125 22.5V20.625H26.1553C26.0344 20.0381 25.8014 19.4801 25.4691 18.9816L26.8659 17.5847L25.5403 16.2591L24.1434 17.6559C23.6449 17.3236 23.0869 17.0906 22.5 16.9697V15H20.625V16.9697C20.0381 17.0906 19.4801 17.3236 18.9816 17.6559L17.5847 16.2591L16.2591 17.5847L17.6559 18.9816C17.3236 19.4801 17.0906 20.0381 16.9697 20.625H15V22.5H16.9697C17.0906 23.0869 17.3236 23.6449 17.6559 24.1434L16.2591 25.5403L17.5847 26.8659L18.9816 25.4691C19.4801 25.8014 20.0381 26.0344 20.625 26.1553V28.125H22.5V26.1553C23.0869 26.0344 23.6449 25.8014 24.1434 25.4691L25.5403 26.8659L26.8659 25.5403L25.4691 24.1434C25.8014 23.6449 26.0344 23.0869 26.1553 22.5H28.125ZM21.5625 24.375C21.0062 24.375 20.4625 24.2101 20 23.901C19.5374 23.592 19.177 23.1527 18.9641 22.6388C18.7512 22.1249 18.6955 21.5594 18.804 21.0138C18.9126 20.4682 19.1804 19.9671 19.5738 19.5738C19.9671 19.1804 20.4682 18.9126 21.0138 18.804C21.5594 18.6955 22.1249 18.7512 22.6388 18.9641C23.1527 19.177 23.592 19.5374 23.901 20C24.2101 20.4625 24.375 21.0062 24.375 21.5625C24.3743 22.3082 24.0777 23.0231 23.5504 23.5504C23.0231 24.0777 22.3082 24.3743 21.5625 24.375Z"
                  className="fill-[#0077C9] group-hover:fill-white"
                />
                <path
                  d="M23.4375 4.6875H20.625V3.75C20.6235 3.25318 20.4255 2.77712 20.0742 2.42581C19.7229 2.0745 19.2468 1.87648 18.75 1.875H11.25C10.7532 1.87648 10.2771 2.0745 9.92581 2.42581C9.5745 2.77712 9.37648 3.25318 9.375 3.75V4.6875H6.5625C6.06568 4.68898 5.58962 4.887 5.23831 5.23831C4.887 5.58962 4.68898 6.06568 4.6875 6.5625V26.25C4.68898 26.7468 4.887 27.2229 5.23831 27.5742C5.58962 27.9255 6.06568 28.1235 6.5625 28.125H13.125V26.25H6.5625V6.5625H9.375V9.375H20.625V6.5625H23.4375V12.1875H25.3125V6.5625C25.311 6.06568 25.113 5.58962 24.7617 5.23831C24.4104 4.887 23.9343 4.68898 23.4375 4.6875ZM18.75 7.5H11.25V3.75H18.75V7.5Z"
                  className="fill-[#0077C9] group-hover:fill-white"
                />
              </svg>
            </span>

            <h1 className="text-base font-bold text-[#1C1D1D] capitalize group-hover:text-white ">
              Task Automation
            </h1>

            <p className="text-[#1C1D1D] font-light text-xs leading-4 group-hover:text-white">
              FlowEase allows users to automate repetitive tasks such as sending
              emails, scheduling appointments, and updating social media. This
              feature helps users save time and focus on more important tasks.
            </p>
          </div>

          <div className="p-8 space-y-3 hover:bg-gradient-to-r from-[#0077C9] to-[#00B5E2] group shadow-lg rounded-xl">
            <span className="inline-block text-blue-500 ">
              <Image
                priority
                src="/images/calender.svg"
                height={30}
                width={30}
                alt="Flow Ease"
              />
            </span>

            <h1 className="text-base font-bold text-[#1C1D1D] capitalize group-hover:text-white ">
              Calendar and Schedule Synchronization
            </h1>

            <p className="text-[#1C1D1D] font-light text-xs leading-4 group-hover:text-white">
              FlowEase integrates with popular calendar apps, such as Google
              Calendar, to keep all of your schedules in one place and eliminate
              the need for manual updates.
            </p>
          </div>

          <div className="p-8 space-y-3 hover:bg-gradient-to-r from-[#0077C9] to-[#00B5E2] group shadow-lg rounded-xl">
            <span className="inline-block text-blue-500 ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 26.25C1.8125 26.25 1.22417 26.0054 0.735 25.5163C0.245 25.0263 0 24.4375 0 23.75V6.25C0 5.5625 0.245 4.97375 0.735 4.48375C1.22417 3.99458 1.8125 3.75 2.5 3.75H27.5C28.1875 3.75 28.7763 3.99458 29.2663 4.48375C29.7554 4.97375 30 5.5625 30 6.25V23.75C30 24.4375 29.7554 25.0263 29.2663 25.5163C28.7763 26.0054 28.1875 26.25 27.5 26.25H2.5ZM19.875 23.75H27.5V6.25H2.5V23.75H2.625C3.5 22.1875 4.70833 20.9633 6.25 20.0775C7.79167 19.1925 9.45833 18.75 11.25 18.75C13.0417 18.75 14.7083 19.1925 16.25 20.0775C17.7917 20.9633 19 22.1875 19.875 23.75ZM11.25 17.5C12.2917 17.5 13.1771 17.1354 13.9062 16.4062C14.6354 15.6771 15 14.7917 15 13.75C15 12.7083 14.6354 11.8229 13.9062 11.0938C13.1771 10.3646 12.2917 10 11.25 10C10.2083 10 9.32292 10.3646 8.59375 11.0938C7.86458 11.8229 7.5 12.7083 7.5 13.75C7.5 14.7917 7.86458 15.6771 8.59375 16.4062C9.32292 17.1354 10.2083 17.5 11.25 17.5ZM18.75 13.75H25C25.3542 13.75 25.6508 13.63 25.89 13.39C26.13 13.1508 26.25 12.8542 26.25 12.5V8.75C26.25 8.39583 26.13 8.09875 25.89 7.85875C25.6508 7.61958 25.3542 7.5 25 7.5H18.75C18.3958 7.5 18.0992 7.61958 17.86 7.85875C17.62 8.09875 17.5 8.39583 17.5 8.75V12.5C17.5 12.8542 17.62 13.1508 17.86 13.39C18.0992 13.63 18.3958 13.75 18.75 13.75ZM5.6875 23.75H16.8125C16.1042 22.9583 15.2658 22.3438 14.2975 21.9062C13.3283 21.4688 12.3125 21.25 11.25 21.25C10.1875 21.25 9.17708 21.4688 8.21875 21.9062C7.26042 22.3438 6.41667 22.9583 5.6875 23.75ZM11.25 15C10.8958 15 10.5992 14.88 10.36 14.64C10.12 14.4008 10 14.1042 10 13.75C10 13.3958 10.12 13.0987 10.36 12.8587C10.5992 12.6196 10.8958 12.5 11.25 12.5C11.6042 12.5 11.9013 12.6196 12.1413 12.8587C12.3804 13.0987 12.5 13.3958 12.5 13.75C12.5 14.1042 12.3804 14.4008 12.1413 14.64C11.9013 14.88 11.6042 15 11.25 15ZM21.875 12.1875L18.75 10V8.75L21.875 10.9375L25 8.75V10L21.875 12.1875Z"
                  className="fill-[#0077C9] group-hover:fill-white"
                />
              </svg>
            </span>

            <h1 className="text-base font-bold text-[#1C1D1D] capitalize group-hover:text-white ">
              Contact Management
            </h1>

            <p className="text-[#1C1D1D] font-light text-xs leading-4 group-hover:text-white">
              FlowEase has a built-in contact management system that allows
              users to easily store and organize their contacts, as well as send
              automated follow-up emails and reminders.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 hover:bg-gradient-to-r from-[#0077C9] to-[#00B5E2] group shadow-lg rounded-xl">
            <span className="inline-block text-blue-500 ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 5C2.375 5 1.25 6.125 1.25 7.5V22.5C1.25 23.875 2.375 25 3.75 25H16.875C16.535 24.2052 16.324 23.3613 16.25 22.5H3.75V10L13.75 16.25L23.75 10V13.75C23.9583 13.742 24.1667 13.742 24.375 13.75C25.0066 13.7519 25.6359 13.8274 26.25 13.975V7.5C26.25 6.125 25.125 5 23.75 5H3.75ZM3.75 7.5H23.75L13.75 13.75L3.75 7.5ZM23.75 15L20.9375 17.8125L23.75 20.625V18.75C24.5788 18.75 25.3737 19.0792 25.9597 19.6653C26.5458 20.2513 26.875 21.0462 26.875 21.875C26.875 22.375 26.7625 22.85 26.55 23.275L27.9125 24.6375C28.4375 23.85 28.75 22.9 28.75 21.875C28.75 19.1125 26.5125 16.875 23.75 16.875V15ZM19.5875 19.1125C19.0625 19.9 18.75 20.85 18.75 21.875C18.75 24.6375 20.9875 26.875 23.75 26.875V28.75L26.5625 25.9375L23.75 23.125V25C22.9212 25 22.1263 24.6708 21.5403 24.0847C20.9542 23.4987 20.625 22.7038 20.625 21.875C20.625 21.375 20.7375 20.9 20.95 20.475L19.5875 19.1125Z"
                  className="fill-[#0077C9] group-hover:fill-white"
                />
              </svg>
            </span>

            <h1 className="text-base font-bold text-[#1C1D1D] capitalize group-hover:text-white ">
              Email Integration
            </h1>

            <p className="text-[#1C1D1D] font-light text-xs leading-4 group-hover:text-white">
              FlowEase can integrate with popular email providers such as Gmail,
              Outlook, and Yahoo to manage all your email correspondence in one
              place.
            </p>
          </div>

          <div className="p-8 space-y-3 hover:bg-gradient-to-r from-[#0077C9] to-[#00B5E2] group shadow-lg rounded-xl">
            <span className="inline-block text-blue-500 ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.4 24.375C28.4499 23.9598 28.4499 23.5402 28.4 23.125L29.7125 22.1C29.8375 22.0125 29.8625 21.875 29.7875 21.7L28.5375 19.55C28.4625 19.4125 28.3 19.375 28.1625 19.4125L26.6 20C26.25 19.7875 25.9375 19.575 25.55 19.425L25.3125 17.7625C25.3008 17.6884 25.2627 17.6211 25.2053 17.5729C25.1479 17.5247 25.075 17.4988 25 17.5H22.5C22.35 17.5 22.2125 17.6125 22.1875 17.7625L21.9625 19.425C21.5625 19.575 21.25 19.7875 20.9 20L19.375 19.4125C19.2125 19.375 19.0375 19.4125 18.9625 19.55L17.7125 21.7C17.6375 21.875 17.675 22.0125 17.7875 22.1L19.1125 23.125C19.0875 23.3375 19.0625 23.55 19.0625 23.75C19.0625 23.95 19.0875 24.1625 19.1125 24.375L17.7875 25.4C17.675 25.4875 17.6375 25.6625 17.7125 25.8L18.9625 27.9625C19.0375 28.125 19.2125 28.125 19.375 28.125L20.9 27.4625C21.25 27.7125 21.5625 27.925 21.9625 28.0875L22.1875 29.7375C22.2125 29.8875 22.35 30 22.5 30H25C25.1625 30 25.2875 29.8875 25.3125 29.7375L25.55 28.0875C25.9375 27.925 26.25 27.7125 26.6 27.4625L28.1625 28.125C28.3 28.125 28.4625 28.125 28.5375 27.9625L29.7875 25.8C29.8625 25.6625 29.8375 25.4875 29.7125 25.4L28.4 24.375ZM23.75 25.9375C22.55 25.9375 21.5625 24.9625 21.5625 23.75C21.5625 22.5375 22.55 21.5625 23.75 21.5625C24.95 21.5625 25.9375 22.5375 25.9375 23.75C25.9375 24.9625 24.9625 25.9375 23.75 25.9375ZM15.1 25H3.75V23.75L6.25 21.25V13.75C6.25 9.875 8.75 6.5 12.5 5.375V5C12.5 3.625 13.625 2.5 15 2.5C16.375 2.5 17.5 3.625 17.5 5V5.375C21.25 6.5 23.75 9.875 23.75 13.75V15C22.8875 15 22.0375 15.1375 21.25 15.3625V13.75C21.25 10.25 18.5 7.5 15 7.5C11.5 7.5 8.75 10.25 8.75 13.75V22.5H15.1C15.0375 22.9125 15 23.325 15 23.75C15 24.175 15.0375 24.5875 15.1 25ZM15.375 26.25C15.625 27 15.925 27.7125 16.325 28.3625C15.9375 28.6 15.4875 28.75 15 28.75C13.625 28.75 12.5 27.625 12.5 26.25H15.375Z"
                  className="fill-[#0077C9] group-hover:fill-white"
                />
              </svg>
            </span>

            <h1 className="text-base font-bold text-[#1C1D1D] capitalize group-hover:text-white ">
              Automated Reminders and Notifications
            </h1>

            <p className="text-[#1C1D1D] font-light text-xs leading-4 group-hover:text-white">
              FlowEase sends automated reminders and notifications to help users
              stay on top of their schedule, tasks, and appointments. This
              feature ensures that nothing falls through the cracks and helps to
              increase productivity.
            </p>
          </div>

          <div className="p-8 space-y-3 hover:bg-gradient-to-r from-[#0077C9] to-[#00B5E2] group shadow-lg rounded-xl">
            <span className="inline-block text-blue-500 ">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1562 16.4062L25.3125 11.25L20.1562 16.4062ZM13.5938 12.6562L17.3438 16.4062L13.5938 12.6562ZM4.6875 18.75L10.7812 12.6562L4.6875 18.75Z"
                  fill="red"
                />
                <path
                  d="M20.1562 16.4062L25.3125 11.25M13.5938 12.6562L17.3438 16.4062M4.6875 18.75L10.7812 12.6562"
                  stroke="white"
                  stroke-width="3.5625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.7188 11.25C27.4954 11.25 28.125 10.6204 28.125 9.84375C28.125 9.0671 27.4954 8.4375 26.7188 8.4375C25.9421 8.4375 25.3125 9.0671 25.3125 9.84375C25.3125 10.6204 25.9421 11.25 26.7188 11.25Z"
                  fill="red"
                  stroke="white"
                  stroke-width="3.5625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.75 19.2188C19.5267 19.2188 20.1562 18.5892 20.1562 17.8125C20.1562 17.0358 19.5267 16.4062 18.75 16.4062C17.9733 16.4062 17.3438 17.0358 17.3438 17.8125C17.3438 18.5892 17.9733 19.2188 18.75 19.2188Z"
                  stroke="white"
                  stroke-width="3.5625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.1875 12.6562C12.9642 12.6562 13.5938 12.0267 13.5938 11.25C13.5938 10.4733 12.9642 9.84375 12.1875 9.84375C11.4108 9.84375 10.7812 10.4733 10.7812 11.25C10.7812 12.0267 11.4108 12.6562 12.1875 12.6562Z"
                  stroke="white"
                  stroke-width="3.5625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.28125 21.5625C4.0579 21.5625 4.6875 20.9329 4.6875 20.1562C4.6875 19.3796 4.0579 18.75 3.28125 18.75C2.5046 18.75 1.875 19.3796 1.875 20.1562C1.875 20.9329 2.5046 21.5625 3.28125 21.5625Z"
                  stroke="white"
                  stroke-width="3.5625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <h1 className="text-base font-bold text-[#1C1D1D] capitalize group-hover:text-white ">
              Reporting and Analytics
            </h1>

            <p className="text-[#1C1D1D] font-light text-xs leading-4 group-hover:text-white">
              FlowEase provides a comprehensive reporting and analytics feature
              that allows users track their performance and measure their
              productivity. Users can also generate reports and export them to
              share with team members or clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
