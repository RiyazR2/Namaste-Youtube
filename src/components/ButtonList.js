import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "IPL",
  "Cooking",
  "Cricket",
  "Valentines",
  "News",
  "Music",
  "Trailer",
  "Politics",
  "Bollywood",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
