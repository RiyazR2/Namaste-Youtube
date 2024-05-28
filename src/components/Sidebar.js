import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early retun Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 ">
      <ul>
        <Link to="/">
          {" "}
          <li>Home</li>
        </Link>
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
