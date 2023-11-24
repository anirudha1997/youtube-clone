import { Link } from "react-router-dom";

const VideoPlaceholder = ({ title, thumbnail, views, channel, id }) => {
  return (
    <Link to={"watch?v=" + id}>
      <div className="mb-3 col-span-1">
        <img src={thumbnail} alt={title} className="object-cover rounded-md" />
        <p className="mt-2 font-semibold">{title}</p>
        <p className="mt-1 text-gray-500">{channel}</p>
        <p className="mt-1 text-sm text-gray-500">{views} views</p>
      </div>
    </Link>
  );
};

export default VideoPlaceholder;
