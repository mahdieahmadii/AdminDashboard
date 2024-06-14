import React from "react";
import "./index.css";
import ArrowDownIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpIcon from "@mui/icons-material/ArrowUpward";

export default function Features() {
  return (
    <div className="features">
      <div className="feature-item">
        <span className="feature-title">Revanue</span>
        <div className="feature-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-rate">
            -11.4 <ArrowDownIcon className="feature-icon negative" />
          </span>
        </div>
        <span className="feature-sub">Compared to last month</span>
      </div>
      <div className="feature-item">
        <span className="feature-title">Sales</span>
        <div className="feature-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-rate">
            -1.4 <ArrowDownIcon className="feature-icon negative" />
          </span>
        </div>
        <span className="feature-sub">Compared to last month</span>
      </div>
      <div className="feature-item">
        <span className="feature-title">Cost</span>
        <div className="feature-container">
          <span className="feature-money">$2,415</span>
          <span className="feature-rate">
            +2.4 <ArrowUpIcon className="feature-icon" />
          </span>
        </div>
        <span className="feature-sub">Compared to last month</span>
      </div>
    </div>
  );
}
