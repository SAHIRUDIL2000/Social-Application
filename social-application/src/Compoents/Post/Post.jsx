import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div className="Post">
      <div className="PostContainer">
        <div className="postTop">
          <img src="/images/1.jpg" alt="" className="PostImg" />
          <span className="UserName">Sahiru Dil</span>
          <span className="PostTime">1 hour ago..</span>
        </div>
        <div className="postCenter">
          <div className="PostCaption">
            Where the beauty of nature takes center stage. 🏞️🌅 #NatureLover
          </div>
          <div className="PostImg">
            <img src="/images/2.jpeg" alt="" className="PostImage" />
          </div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/images/Like.jpeg"
              alt="ReactImage"
              className="ReactImg"
            />
            <img
              src="/images/Heart.jpg"
              alt="ReactImage"
              className="ReactImg"
            />

            <span className="LikeCount">SA_dIlrUwan & 190 Other</span>
          </div>
          <div className="postBottomRight">
            <span className="CountComment">
              <img
                src="/images/Com.png"
                alt="ReactImage"
                className="ReactImg"
              />
              55 Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
