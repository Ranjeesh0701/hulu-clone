import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur">
      <div className="flex px-10 py-5 sm:px-20 text-[18px] whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            className="last:pr-1 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-400"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0B0C0F] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
