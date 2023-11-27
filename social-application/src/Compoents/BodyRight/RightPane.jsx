import React from "react";
import "./RightPane.css";

export default function RightPane() {
  return (
    <div className="RightpaneSide">
      <div className="rightPaneContainer">
        <div className="adds">
          <span className="sponser">Sponsored</span>
          <img src="/images/ADD.jpeg" alt="" className="adImg" />
          <span className="addText">
            Discover ADBAG: where vibrant colors meet quality craftsmanship in
            chic, eco-friendly bags. Embrace self-expression with our unique
            styles!
          </span>
        </div>
        <br />
        <hr className="Hr" />
        <div className="Birthday">
          <img src="/images/Birth.avif" alt="" className="BirthImg" />
          <span className="BirthText">
            <b>Sahan Umayanga</b> & <b>2 Others</b> birthday today...!
          </span>
        </div>
        <hr className="Hr" />
        <div className="Friend">
          <li className="BirthImglist">
            <div className="FriendOnlineImg">
              <img src="/images/1.jpg" alt="" className="FriendOnlineImage" />
              <span className="OnlineStatus"></span>
              <span className="OnlineFrienDName">Sahiru Dil</span>
            </div>
          </li>
        </div>
        <div className="Friend">
          <li className="BirthImglist">
            <div className="FriendOnlineImg">
              <img src="/images/P3.jpeg" alt="" className="FriendOnlineImage" />
              <span className="OnlineStatus"></span>
              <span className="OnlineFrienDName">Mohiru Lakshan</span>
            </div>
          </li>
        </div>
        <div className="Friend">
          <li className="BirthImglist">
            <div className="FriendOnlineImg">
              <img src="/images/P4.jpeg" alt="" className="FriendOnlineImage" />
              <span className="OnlineStatus"></span>
              <span className="OnlineFrienDName">Jude fernando</span>
            </div>
          </li>
        </div>
        <div className="Friend">
          <li className="BirthImglist">
            <div className="FriendOnlineImg">
              <img src="/images/P2.jpeg" alt="" className="FriendOnlineImage" />
              <span className="OnlineStatus"></span>
              <span className="OnlineFrienDName">Shani Perera</span>
            </div>
          </li>
        </div>
        <div className="Friend">
          <li className="BirthImglist">
            <div className="FriendOnlineImg">
              <img src="/images/P1.jpeg" alt="" className="FriendOnlineImage" />
              <span className="OnlineStatus"></span>
              <span className="OnlineFrienDName">Dilmi Sanchika</span>
            </div>
          </li>
        </div>
        <div className="Friend">
          <li className="BirthImglist">
            <div className="FriendOnlineImg">
              <img src="/images/PC5.jpg" alt="" className="FriendOnlineImage" />
              <span className="OnlineStatus"></span>
              <span className="OnlineFrienDName">Dilshan Alwis</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}
