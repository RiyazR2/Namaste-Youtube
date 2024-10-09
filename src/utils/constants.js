export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// 2nd key = ""
//https://console.cloud.google.com/apis/credentials?project=ace-fiber-309604 ==> go and update key from this
export const LIVE_CHAT_COUNT = 20;

// Most Popular Videos API
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// prefetch added for CORS ERROR :- https://thingproxy.freeboard.io/fetch
export const YOUTUBE_SEARCH_API =
  "https://cors-handlers.vercel.app/api/?url=http%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D";
// "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_KEYWORD_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  GOOGLE_API_KEY;

// export const SEARCH_KEYWORD_API =
//   "GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[GOOGLE_API_KEY] HTTP/1.1";

export const YOUTUBE_HOME_ICON =
  "https://t4.ftcdn.net/jpg/07/13/03/55/360_F_713035523_QJAAIPZnNnBipmwYhz0WruLe6KVQfxaH.jpg";

export const YOUTUBE_SHORTS_ICON =
  "https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png";

export const YOUTUBE_SUBSCRIPTION_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF2WvlfBFamFtc_WwmyBsCHgP6WdvqAGqKw&s";
