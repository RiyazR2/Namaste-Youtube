const VideoCard = ({ info }) => {
  // console.log("info ", info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" p-2 m-2 w-80  cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="video" />
      <ul>
        <li>{}</li>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
