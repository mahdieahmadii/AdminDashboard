import React, { useState } from "react";
import "./index.css";
import { products } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Products() {
  const [productsData, setProductsData] = useState(products);

  const productDelete = (id) => {
    setProductsData(productsData.filter((product) => product.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <div className="user-list-user">
                <img
                  src={params.row.avatar}
                  alt="img"
                  className="user-list-img"
                />
                {params.row.title}
              </div>
            </Link>
          </>
        );
      },
    },

    { field: "price", headerName: "Price", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {
        return (
          <>
            <Link to={`/product/${param.row.id}`} className="link">
              <button className="user-list-edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="user-list-delete"
              onClick={() => productDelete(param.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="user-list">
      <DataGrid rows={productsData} columns={columns} />
    </div>
  );
}
