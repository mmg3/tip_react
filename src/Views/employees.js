import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import UseFetch from "../Communications/useFetch";
import axios from "axios";

const Employees = (props) => {
  const { fila, setFila } = props;
  const [name, setName] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [bdate, setBDate] = React.useState("");
  const [dataBody, setDataBody] = React.useState([]);

  const handleReset = () => {
    setFila([]);
    setName("");
    setApellido("");
    setEmail("");
    setPosition("");
    setBDate("");
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
    datosPost.bdate = bdate;
    datosPost.name = name;
    datosPost.surname = apellido;
    datosPost.email = email;
    datosPost.position = position;

    SaveData(datosPost);
  };

  const SaveData = (datosPost) => {
    UseFetch("post", "https://localhost:7214/Employee/", datosPost);
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
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          value={email || (fila && fila.email) || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Nombre"
          InputLabelProps={{
            shrink: true,
          }}
          value={name || (fila && fila.name) || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="SurName"
          InputLabelProps={{
            shrink: true,
          }}
          value={apellido || (fila && fila.surname) || ""}
          onChange={(e) => setApellido(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="BirthDate"
          InputLabelProps={{
            shrink: true,
          }}
          value={bdate || (fila && fila.birthDate) || ""}
          onChange={(e) => setBDate(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Position"
          InputLabelProps={{
            shrink: true,
          }}
          value={position || (fila && fila.position) || ""}
          onChange={(e) => setPosition(e.target.value)}
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

export default Employees;
