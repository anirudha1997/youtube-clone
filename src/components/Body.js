import React from "react";
import TagButton from "./TagButton";
import VideoSection from "./VideoSection";

const Body = () => {
  return (
    <div className="p-5 flex-1">
      <div className="flex flex-wrap items-center">
        <TagButton label="All" />
        <TagButton label="Podcasts" />
        <TagButton label="Cricket" />
        <TagButton label="Music" />
        <TagButton label="Games" />
        <TagButton label="Recently Uploaded" />
      </div>
      <VideoSection />
    </div>
  );
};

export default Body;
