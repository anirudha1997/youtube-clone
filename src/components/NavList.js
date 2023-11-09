import React from "react";

const NavList = () => {
  return (
    <div className="border-b border-gray-200 py-3 pr-4 w-[95%]">
      <h2 className="text-xl font-semibold pb-3 pl-3 cursor-pointer">
        Heading
      </h2>
      <ul className="list-none">
        <li className="py-3 hover:bg-gray-300 rounded-md pl-3 cursor-pointer">
          Your channel
        </li>
        <li className="py-3 hover:bg-gray-300 rounded-md pl-3 cursor-pointer">
          History
        </li>
        <li className="py-3 hover:bg-gray-300 rounded-md pl-3 cursor-pointer">
          Your videos
        </li>
        <li className="py-3 hover:bg-gray-300 rounded-md pl-3 cursor-pointer">
          Watch Later
        </li>
        <li className="py-3 hover:bg-gray-300 rounded-md pl-3 cursor-pointer">
          Downloads
        </li>
      </ul>
    </div>
  );
};

export default NavList;
