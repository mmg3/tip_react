import React from "react";
import axios from "axios";

const useFetch = ({ method, baseURL, body }) => {
  const [result, setResult] = React.useState(null);

  if (method.toLowerCase() === "get") {
    React.useEffect(() => {
      axios.get(baseURL, body).then((response) => {
        setResult(response.data);
      });
    }, []);
  } else if (method.toLowerCase() === "post") {
    React.useEffect(() => {
      axios.post(baseURL, body).then((response) => {
        setResult(response.data);
      });
    }, []);
  }

  return result;
};

export default useFetch;
