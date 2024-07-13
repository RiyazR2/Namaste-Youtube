import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Trailer",
  "Politics",
  "Bollywood",
  "News",
  "Music",
  "Gaming",
  "Songs",
  "Live",
  "IPL",
  "Cooking",
  "Cricket",
  "Valentines",
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
