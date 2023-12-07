import React from "react";
import UserProfileIcon from "../assets/img/user-profile.png";
import CommentList from "./CommentList";

const Comment = (props) => {
  const { name, text, replies } = props.info;
  return (
    <>
      <div className="my-2 flex items-center ml-3 bg-gray-100 rounded-md shadow-sm p-4">
        <img src={UserProfileIcon} alt="user" className="w-10 h-10" />
        <div className="ml-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      {replies && (
        <div className="border-l-[1px] border-l-gray-200 pl-3 ml-3">
          <CommentList comments={replies} />
        </div>
      )}
    </>
  );
};

export default Comment;
