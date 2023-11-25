import React from "react";
import NavBar from "../../Compoents/NavBar/NavBar.js";

export default function Home() {
  return (
    <div>
      <NavBar />
      <leftPane />
      <PostPane />
      <RightPane />
    </div>
  );
}
