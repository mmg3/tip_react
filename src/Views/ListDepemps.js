import { useState, Fragment } from "react";
import { useGridApiRef, DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import UseFetch from "../Communications/useFetch";

const ListDepemps = (props) => {
  const { fila, setFila } = props;
  const [result, setResult] = useState([]);
  const [resultList, setResultList] = useState([]);
  const apiRef = useGridApiRef();

  let rows = UseFetch(
    "get",
    `https://localhost:7214/DepartmentEmployee/`,
    null
  );

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    //apiRef.current.setRowMode(id, "edit");
    let fila = rows.filter((el) => {
      return el.id === id;
    });
    setFila(fila[0]);
    console.log("entra", fila);
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      editable: false,
      sortable: false,
    },
    {
      field: "depName",
      headerName: "Department Name",
      width: 150,
      editable: false,
      sortable: false,
    },
    {
      field: "empName",
      headerName: "Employee Name",
      width: 150,
      editable: true,
      sortable: false,
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
            onClick={handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <Fragment>
      {rows && rows.length > 0 && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      )}
    </Fragment>
  );
};

export default ListDepemps;
