const YOUTUBE_API_KEY = "AIzaSyAsqu5ecPCc7WHQqpHsE3ioMRIzU4sqOZg";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;