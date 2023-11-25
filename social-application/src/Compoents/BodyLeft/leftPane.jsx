import React from "react";
import "./leftPane.css";
import ChatIcon from "@mui/icons-material/Chat";
import Groups2Icon from "@mui/icons-material/Groups2";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function LeftPane() {
  return (
    <div className="leftpaneSide">
      <div className="leftpaneContainer">
        <div className="leftpaneMenu">
          <li className="leftpaneMenuItem">
            <ChatIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Messages</span>
          </li>
          <li className="leftpaneMenuItem">
            <Groups2Icon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Groups</span>
          </li>
          <li className="leftpaneMenuItem">
            <FeedbackIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Feedback</span>
          </li>
          <li className="leftpaneMenuItem">
            <SportsScoreIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Sports</span>
          </li>
          <li className="leftpaneMenuItem">
            <EditCalendarIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Calendar</span>
          </li>
          <li className="leftpaneMenuItem">
            <SportsEsportsIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Esports</span>
          </li>
          <li className="leftpaneMenuItem">
            <BuildCircleIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Build Circle</span>
          </li>
          <li className="leftpaneMenuItem">
            <NewspaperIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Newspaper</span>
          </li>
          <li className="leftpaneMenuItem">
            <FitnessCenterIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Fitness Center</span>
          </li>
          <li className="leftpaneMenuItem">
            <ShoppingCartCheckoutIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Shopping</span>
          </li>
          <li className="leftpaneMenuItem">
            <BookmarkIcon className="leftpaneMenuIcon" />
            <span className="leftpaneMenuMsg">Bookmark</span>
          </li>
          <hr />
          <div className="PagesLiked">
            <h3>Pages You Liked</h3>
          </div>
          <div className="PageList">
            <li className="LikePage">
              <img
                src="/images/PC2.jpg"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">Infinity Step</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC3.jpg"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">Urban Flex</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC4.jpg"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">Fusion Style</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC5.png"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">Puma Pluse</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC6.jpg"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">Nethmi Saloon</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC7.jpeg"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">The Voice</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC8.jpeg"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">ITN Srilanka</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC6.png"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">BBC News</span>
            </li>
            <li className="LikePage">
              <img
                src="/images/PC10.jpg"
                alt="Page Image"
                className="LikePageImg"
              />
              <span className="LikePageName">Strive Style</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
