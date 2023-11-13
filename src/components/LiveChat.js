import { useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const messages = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  const [chatInput, setChatInput] = useState("");
  return (
    <>
      <div className="col-span-1 border border-gray-300 mt-2 rounded-md">
        <div className=" bg-gray-100  px-2 py-4 shadow-sm h-[455px] overflow-y-scroll flex flex-col-reverse">
          {messages.map((msg, index) => (
            <LiveChatMessage
              key={index}
              name={msg.name}
              message={msg.message}
            />
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Anirudh",
                message: chatInput,
              })
            );
            setChatInput("");
          }}
          className="flex mt-2 p-2 w-full"
        >
          <input
            placeholder="Enter your message"
            className="w-full border-b-[1px] border-b-black mr-3 outline-none"
            value={chatInput}
            onChange={(e) => {
              setChatInput(e.target.value);
            }}
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
