import React from "react";
import "./postPane.css";
import AddPost from "../ADDpost/AddPost";
import Post from "../Post/Post.jsx";

export default function PostPane() {
  return (
    <div className="PostpaneSide">
      <AddPost />
      <Post />
      <Post />
    </div>
  );
}
