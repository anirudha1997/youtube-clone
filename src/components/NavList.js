import React from "react";

const NavList = ({ heading, list }) => {
  return (
    <div className="border-b border-gray-200 py-3 pr-4 w-[95%]">
      {heading && (
        <h2 className="md:text-xl font-semibold pb-3 pl-3 cursor-pointer">
          {heading}
        </h2>
      )}
      <ul className="list-none">
        {list.map((item, index) => (
          <li
            key={index}
            className="py-3 hover:bg-gray-300 rounded-md pl-3 cursor-pointer text-sm md:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
