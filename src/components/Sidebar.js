import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  YOUTUBE_HOME_ICON,
  YOUTUBE_SHORTS_ICON,
  YOUTUBE_SUBSCRIPTION_ICON,
} from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early retun Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <Link to="/" className="flex items-center">
          <img className="w-4 mr-2" src={YOUTUBE_HOME_ICON} alt="HOME" />
          <li>Home</li>
        </Link>

        <li className="flex items-center">
          <img className="w-4 mr-2" src={YOUTUBE_SHORTS_ICON} alt="Shorts" />
          Shorts
        </li>
        <li className="flex items-center">
          <img
            className="w-4 mr-2"
            src={YOUTUBE_SUBSCRIPTION_ICON}
            alt="Subscriptions"
          />
          Subscriptions
        </li>
      </ul>
      <div className="h-0 w-40 border border-black"></div>
      <h1 className=" font-bold pt-5 mb-2">Subscription</h1>
      <ul>
        <li className="mb-3">🚀 Akshay Saini</li>
        <li className="mb-3">🏏 Cricket</li>
        <li className="mb-3">🧑🏻‍💻Tech</li>
        <li className="flex gap-2 mb-3">🌐 ReactJs</li>
      </ul>
      <h1 className=" font-bold pt-5">Explore</h1>
      <ul>
        <li className="flex gap-2 mb-3"> 🔴 Trending</li>
        <li className="mb-3"> 🛒 Shopping</li>
        <li className="mb-3"> 🎵Music</li>
        <li className="mb-3">▶️Movies</li>
      </ul>
      <h1 className=" font-bold pt-5 mr-2 w-60 mb-2">More From Youtube </h1>
      <ul>
        <li className="mb-3">Youtube Premium</li>
        <li className="mb-3">Youtube Studio</li>
        <li className="mb-3">Youtube Music</li>
        <li className="mb-3">Youtube Kids</li>
      </ul>
    </div>
  );
};

export default Sidebar;
