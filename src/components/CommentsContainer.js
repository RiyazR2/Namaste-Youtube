import React from "react";
import { commentsData } from "../utils/commentsData";

// Youtube Comments
// Youtube Comments

// Comment Structure
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-lg bg-white p-4 rounded-lg my-4">
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-4">
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="ml-4">
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="pl-6 border-l-2 border-gray-300">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className=" max-w-4xl  my-10 p-5 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
