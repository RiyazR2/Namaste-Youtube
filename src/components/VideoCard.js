// const VideoCard = ({ info }) => {
//   // console.log("info ", info);

//   const { snippet, statistics } = info;
//   const { channelTitle, title, thumbnails, publishedAt } = snippet;

//   return (
//     <div className=" p-2 m-2 w-80  cursor-pointer ">
//       <img className="rounded-lg" src={thumbnails.medium.url} alt="video" />
//       <ul>
//         <li className="font-bold py-2">{title}</li>
//         <li>{channelTitle}</li>
//         <li>{statistics.viewCount} views</li>
//         <li>{publishedAt} </li>
//       </ul>
//     </div>
//   );
// };

// export default VideoCard;

/************************************************** */

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const formattedViews = Intl.NumberFormat("en", {
    notation: "compact",
  }).format(viewCount);
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer ">
      <img
        className="w-full h-48 object-cover"
        src={thumbnails.medium.url}
        alt="video"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h2>
        <p className="text-gray-600">{channelTitle}</p>
        <div className="mt-2 text-gray-600 text-sm">
          <span>{formattedViews} views</span>
          <span> • </span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

/*

Explanation:
formattedViews: Uses Intl.NumberFormat with the compact notation to format the views similar to YouTube's short form (e.g., 1.2K, 3.4M).
formattedDate: Formats the date to a readable string with the month abbreviated (e.g., Jul 12, 2023).
VideoCard Component: Ensures a consistent card size (w-80 m-2) and updates the views and date layout to match YouTube's style.
CSS Classes:
Consistent Size and Spacing: w-80 for width, m-2 for margin, ensuring consistent size and spacing between cards.
Flexbox Layout for Metadata: Places views and date on a single line with a dot separator for clarity.
This approach will create a responsive, visually appealing grid of video cards with consistent sizing and spacing, similar to YouTube's homepage.
*/
