import React from "react";

const Button = ({name='download',svg=''}) => (
  <a
    className="inline-flex bg-blue-600  text-white items-center gap-2 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
    href="#"
  >
    <span className="text-sm font-medium">{name}</span>

    {/* <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg> */}
  </a>
);

export default Button;
