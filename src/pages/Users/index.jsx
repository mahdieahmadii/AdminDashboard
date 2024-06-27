import React, { useState } from "react";
import "./index.css";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Users() {
  const [userData, setUserData] = useState(userRows);

  const userDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="/">
              <div className="user-list-user">
                <img
                  src={params.row.avatar}
                  alt="img"
                  className="user-list-img"
                />
                {params.row.username}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      with: 200,
    },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction", with: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {
        return (
          <>
            <Link to={`/user/${param.row.id}`} className="link">
              <button className="user-list-edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="user-list-delete"
              onClick={() => userDelete(param.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="user-list">
      <DataGrid rows={userData} columns={columns} />
    </div>
  );
}
