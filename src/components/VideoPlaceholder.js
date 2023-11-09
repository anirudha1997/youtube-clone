import React from "react";

const VideoPlaceholder = ({ title, thumbnail, views, channel }) => {
  return (
    <div className="mb-3 mr-4 col-span-1">
      <img src={thumbnail} alt={title} className="object-cover rounded-md" />
      <p className="mt-2 font-semibold">{title}</p>
      <p className="mt-1 text-gray-500">{channel}</p>
      <p className="mt-1 text-sm text-gray-500">{views} views</p>
    </div>
  );
};

export default VideoPlaceholder;
