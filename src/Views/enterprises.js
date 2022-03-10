import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import UseFetch from "../Communications/useFetch";
import axios from "axios";

const Enterprises = (props) => {
  const { fila, setFila } = props;
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [dataBody, setDataBody] = React.useState([]);

  const handleReset = () => {
    setFila([]);
    setName("");
    setPhone("");
    setAddress("");
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
    datosPost.address = address;
    datosPost.name = name;
    datosPost.phone = phone;

    SaveData(datosPost);
  };

  const SaveData = (datosPost) => {
    UseFetch("post", "https://localhost:7214/Enterprise/", datosPost);
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
          label="Name"
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
          label="Phone"
          InputLabelProps={{
            shrink: true,
          }}
          value={phone || (fila && fila.phone) || ""}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Address"
          InputLabelProps={{
            shrink: true,
          }}
          value={address || (fila && fila.address) || ""}
          onChange={(e) => setAddress(e.target.value)}
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

export default Enterprises;
