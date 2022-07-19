import Image from "next/image";
import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="px-5 py-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40"
    >
      <Image
        layout="responsive"
        rounded
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        className="rounded-sm"
      />
      <div className="pb-4 pt-2 sm:px-2">
        <p className="truncate max-w-md text-[14px]">{result.overview}</p>
        <h2 className="mt-1 mb-1 text-lg font-semibold text-white transition-all duration-100 group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center text-[12px] sm:opacity-0 group-hover:opacity-100 text-transform: uppercase">
          {result.media_type && `${result.media_type} `}
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className="h-4 sm:h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
