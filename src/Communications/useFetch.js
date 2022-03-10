import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (metod, baseURL, body) => {
  const [rows, setRow] = useState("");

  useEffect(async () => {
    const result = await axios({
      url: baseURL,
      method: metod,
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    setRow(result.data);
  }, []);
  return rows;
};

export default UseFetch;
