const GOOGLE_API_KEY = "#";
// 2nd key = ""
//https://console.cloud.google.com/apis/credentials?project=ace-fiber-309604 ==> go and update key from this
export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API1 =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const YOUTUBE_SEARCH_API2 =
//   "https://corsproxy.io/?" +
//   encodeURIComponent(
//     "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
//   );

////////////////////////////////////////////////////////////////////////////////////
// export const YOUTUBE_SEARCH_API3 = "https://http-cors-proxy.p.rapidapi.com/";
// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     Origin: "www.example.com",
//     "X-Requested-With": "www.example.com",
//     "X-RapidAPI-Key": "815b0bc3b1msh35b258dcc7ede8ep10041fjsn70ba9caaa79f",
//     "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
//   },
//   body: {
//     url: "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query",
//   },
// };

// try {
//   const response = await fetch(YOUTUBE_SEARCH_API3, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
