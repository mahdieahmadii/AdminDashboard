import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./index.css";
import { newMembers } from "../../datas";

export default function WidgetSm() {
  return (
    <div className="widget-sm">
      <span className="wdget-sm-title">New Join Members</span>
      <ul className="widget-sm-list">
        {newMembers.map((user) => {
          return (
            <li key={user.id} className="widget-sm-list-item">
              <img className="widget-sm-img" src={user.img} alt="person" />
              <div className="widget-sm-user">
                <span className="widget-sm-user-name">{user.username}</span>
                <span className="widget-sm-user-title">{user.title}</span>
              </div>
              <button className="widget-sm-button">
                <VisibilityIcon className="widget-sm-icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
