const GOOGLE_API_KEY = "AIzaSyB-v1j1S61-kah-edlFSSvYA6sQEaL0IHU";
// 2nd key = ""
//https://console.cloud.google.com/apis/credentials?project=ace-fiber-309604 ==> go and update key from this
export const LIVE_CHAT_COUNT = 25;

// Most Popular Videos API
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// prefetch added for CORS ERROR :- https://thingproxy.freeboard.io/fetch
export const YOUTUBE_SEARCH_API =
  "https://cors-handlers.vercel.app/api/?url=http%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D";
// "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
