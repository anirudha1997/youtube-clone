import React from "react";
import { Link } from "react-router-dom";

const SearchResultCard = ({ info, thumbnail, videoId }) => {
  const { title, channelTitle, description, publishedAt } = info;
  return (
    <Link to={"watch?v=" + videoId}>
      <div className="grid grid-cols-2 lg:grid-cols-4 mb-5">
        <div className="col-span-1">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full rounded-lg "
          />
        </div>
        <div className="col-span-1 lg:col-span-3 ml-3">
          <p className="text-xs md:text-xl">{title}</p>
          <p className="text-xs text-gray-500">{publishedAt}</p>
          <p className="text-xs md:text-sm text-gray-500 my-3">
            {channelTitle}
          </p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
