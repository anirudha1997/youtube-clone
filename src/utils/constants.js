const YOUTUBE_API_KEY = "AIzaSyDpSOJkpFQcMRbJV2C-aLrYmDpDJHeW8go";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "UserName",
    text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
    replies: [
      {
        name: "UserName",
        text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
      },
      {
        name: "UserName",
        text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
        replies: [
          {
            name: "UserName",
            text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
            replies: [
              {
                name: "UserName",
                text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
                replies: [
                  {
                    name: "UserName",
                    text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "UserName",
    text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
  },
  {
    name: "UserName",
    text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
    replies: [
      {
        name: "UserName",
        text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
        replies: [
          {
            name: "UserName",
            text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
          },
        ],
      },
    ],
  },
  {
    name: "UserName",
    text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
    replies: [
      {
        name: "UserName",
        text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
      },
    ],
  },
  {
    name: "UserName",
    text: "lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
  },
];
