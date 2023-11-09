import React from "react";

const TagButton = ({ label }) => {
  return (
    <button className="px-3 py-1 mb-3 bg-gray-500 text-white rounded-md mr-3">
      {label}
    </button>
  );
};

export default TagButton;
