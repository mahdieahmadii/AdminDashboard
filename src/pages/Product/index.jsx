import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Chart from "../../components/Chart/index";
import { productsData } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newProduct">
          <button className="product-add-button">Create</button>
        </Link>
      </div>

      <div className="product-top">
        <div className="product-top-left">
          <Chart
            title={"Sale in month"}
            data={productsData}
            dataKey={"sales"}
          />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="images/dell.jpg"
              alt="laptop"
              className="product-info-img"
            />
            <span className="product-name">Dell Laptop</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <div className="product-info-key">ID: </div>
              <div className="product-info-value">132 </div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Name: </div>
              <div className="product-info-value">Dell </div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Sales: </div>
              <div className="product-info-value">$90_000 </div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Active: </div>
              <div className="product-info-value">Yes </div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">In stock: </div>
              <div className="product-info-value">Yes </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Dell Laptop" />
            <label>In Stock</label>
            <select id="inStock">
              <option value={"yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
            <label>Active</label>
            <select id="inStock">
              <option value={"yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-uploader">
              <img
                src="/images/dell.jpg"
                alt="profile"
                className="product-uploader-img"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="product-button">Upload (Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
