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
