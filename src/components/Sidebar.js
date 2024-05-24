import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-52">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trendig</li>
        <li>Music</li>
        <li>Movie</li>
        <li>Gaming</li>
        <li>Sports</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};

export default Sidebar;
