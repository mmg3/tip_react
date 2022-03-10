import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import UseFetch from "../Communications/useFetch";
import axios from "axios";

const DepEmps = (props) => {
  const { fila, setFila } = props;
  const [depName, setDepName] = React.useState("");
  const [empName, setEmpName] = React.useState("");
  const [dataBody, setDataBody] = React.useState([]);

  const handleReset = () => {
    setFila([]);
    setDepName("");
    setEmpName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fecha = new Date();

    let datosPost = [];

    datosPost.createdBy = fila.createdBy;
    datosPost.createdDate = fila.createdBy;
    datosPost.modifiedBy = "guido.guerrero";
    datosPost.modifiedDate = fecha.toISOString();
    datosPost.status = fila.status;
    datosPost.depName = fila.depName;
    datosPost.empName = fila.depName;

    SaveData(datosPost);
  };

  const SaveData = (datosPost) => {
    UseFetch("post", "https://localhost:7214/DepartmentEmployee/", datosPost);
    setDataBody(datosPost);
    console.log(datosPost);
    handleReset();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Department Name"
          InputLabelProps={{
            shrink: true,
          }}
          value={depName || (fila && fila.depName) || ""}
          onChange={(e) => setDepName(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Employee Name"
          InputLabelProps={{
            shrink: true,
          }}
          value={empName || (fila && fila.empName) || ""}
          onChange={(e) => setEmpName(e.target.value)}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
        <Button
          variant="contained"
          color="warning"
          type="reset"
          onClick={() => handleReset()}
        >
          Clear
        </Button>
      </form>
    </div>
  );
};

export default DepEmps;
