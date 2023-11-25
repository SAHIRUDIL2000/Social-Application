import React from "react";
import NavBar from "../../Compoents/NavBar/NavBar.js";
import LeftPane from "../../Compoents/BodyLeft/leftPane.jsx";
import PostPane from "../../Compoents/BodyCenter/PostPane.jsx";
import RightPane from "../../Compoents/BodyRight/RightPane.jsx";

export default function Home() {
  return (
    <div>
      <NavBar />
      <LeftPane />
      <PostPane />
      <RightPane />
    </div>
  );
}
