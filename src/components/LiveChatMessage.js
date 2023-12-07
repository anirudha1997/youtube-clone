import UserProfileIcon from "../assets/img/user-profile.png";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-3">
      <img src={UserProfileIcon} alt="user" className="w-8 h-8 mx-4" />
      <div className="">
        <span className="font-bold">{name}</span>
        <span className="pl-3">{message}</span>
      </div>
    </div>
  );
};

export default LiveChatMessage;
