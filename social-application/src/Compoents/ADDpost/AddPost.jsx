import React from "react";
import "./AddPost.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function AddPost() {
  return (
    <div className="AddPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/PC1.jpg" alt="Pro pic" className="addPostPc" />
          <input
            placeholder="Whats do you want to post...?"
            type="text"
            className="addPostInput"
          />
        </div>
        <hr className="postHR" />
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <AddAPhotoIcon htmlColor="Orange" className="AddPhotoFrame" />
              <span className="addPostOptionTexy">Add Photo Video..</span>
            </div>
            <div className="addPostOption">
              <AddLocationAltIcon htmlColor="Green" className="AddPhotoFrame" />
              <span className="addPostOptionTexy">Add Location..</span>
            </div>
            <div className="addPostOption">
              <LocalOfferIcon htmlColor="Purple" className="AddPhotoFrame" />
              <span className="addPostOptionTexy">Tag your friends..</span>
            </div>
            <div className="addPostOption">
              <LiveTvIcon htmlColor="Yellow" className="AddPhotoFrame" />
              <span className="addPostOptionTexy">Go Live..</span>
            </div>
            <div className="addPostOption">
              <AddReactionIcon htmlColor="Pink" className="AddPhotoFrame" />
              <span className="addPostOptionTexy">Add Feeling Activity..</span>
            </div>
          </div>
          <button className="postBtn">POST</button>
        </div>
      </div>
    </div>
  );
}
