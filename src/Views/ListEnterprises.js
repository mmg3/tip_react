import React, { Fragment } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    editable: false,
    sortable: false,
  },
  {
    field: "name",
    headerName: "Name",
    width: 100,
    editable: false,
    sortable: false,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 110,
    editable: true,
    sortable: false,
  },
  {
    field: "address",
    headerName: "Address",
    sortable: false,
    width: 160,
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    getActions: ({ id }) => {
      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          //onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          //onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  },
];

const rows = [
  { id: 1, name: "Snow", phone: "Jon", address: 35 },
  { id: 2, name: "Lannister", phone: "Cersei", address: 42 },
  { id: 3, name: "Lannister", phone: "Jaime", address: 45 },
  { id: 4, name: "Stark", phone: "Arya", address: 16 },
  { id: 5, name: "Targaryen", phone: "Daenerys", address: null },
  { id: 6, name: "Melisandre", phone: null, address: 150 },
  { id: 7, name: "Clifford", phone: "Ferrara", address: 44 },
  { id: 8, name: "Frances", phone: "Rossini", address: 36 },
  { id: 9, name: "Roxie", phone: "Harvey", address: 65 },
  { id: 9, name: "Roxie", phone: "Harvey", address: 65 },
];

const ListEnterprises = () => {
  return (
    <Fragment>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Fragment>
  );
};

export default ListEnterprises;
