import React from "react";
import "./index.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-wrapper">
        <div className="top-left">
          <span className="logo">Dashboard</span>
        </div>
        <div className="top-right">
          <div className="top-bar-icon-container">
            <NotificationsIcon />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="top-bar-icon-container">
            <LanguageIcon />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="top-bar-icon-container">
            <SettingsIcon />
          </div>
          <img src="images/person.png" className="top-avatar" alt="person" />
        </div>
      </div>
    </div>
  );
}
