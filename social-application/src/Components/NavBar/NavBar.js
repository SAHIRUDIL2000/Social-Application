import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBarBox">
      <div className="NavBarLeft">
        <span className="Logo">Soial Application</span>
      </div>
      <div className="NavBarCenter">
        <div className="SearchBarBox">
          <SearchIcon className="SearchIcon" />
          <input
            type="text"
            id="SearchInput"
            placeholder="Search your friend"
            className="SearchInput"
          />
        </div>
      </div>
      <div className="NavBarRight">
        <div className="NavBarLinks">
          <span className="NavBarLink">HomePage</span>
          <span className="NavBarLink">Profile</span>
        </div>
        <div className="NavBarIcons">
          <div className="NavBarIcon">
            <PermIdentityIcon />
            <span className="IconTag">8</span>
          </div>
          <div className="NavBarIcon">
            <MessageIcon />
            <span className="IconTag">3</span>
          </div>
          <div className="NavBarIcon">
            <SettingsIcon />
            <span className="IconTag">1</span>
          </div>
          <div className="NavBarIcon">
            <NotificationsIcon />
            <span className="IconTag">5</span>
          </div>
        </div>
        <div className="ProPicture">
          <img src="/images/PC1.jpg" alt="ProPicture" className="ProPic"></img>
        </div>
      </div>
    </div>
  );
}
