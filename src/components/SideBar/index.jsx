import React from "react";
import "./index.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebar-list-item active">
                <LineStyleIcon className="sidebar-icon" />
                Home
              </li>
            </Link>
            <li className="sidebar-list-item">
              <TimelineIcon className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUpIcon className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item ">
                <PermIdentityIcon className="sidebar-icon" />
                Users
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebar-list-item">
                <PermIdentityIcon className="sidebar-icon" />
                New User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-list-item">
                <StorefrontIcon className="sidebar-icon" />
                Products
              </li>
            </Link>
            <li className="sidebar-list-item">
              <AttachMoneyIcon className="sidebar-icon" />
              Transaction
            </li>
            <li className="sidebar-list-item">
              <BarChartIcon className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <MailOutlineIcon className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeedIcon className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutlineIcon className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item ">
              <WorkOutlineIcon className="sidebar-icon" />
              Mange
            </li>
            <li className="sidebar-list-item">
              <TimelineIcon className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <ReportIcon className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
