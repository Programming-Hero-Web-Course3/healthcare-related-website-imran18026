import { useEffect, useState } from "react";
import { useParams } from "react-router";

import React from "react";
import CardDetails from "../CardDetails/CardDetails";

const Details = () => {
  const { serviceId } = useParams();

  const [details, setDetails] = useState([]);
  const [result, setResult] = useState({});
  useEffect(() => {
    fetch("/services.JSON")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  //  find out data by matching serviceId
  useEffect(() => {
    const found = details.find((o) => o.id === serviceId);
    setResult(found);
  }, [details]);
  // console.log(result);

  return <div>{<CardDetails card={result}></CardDetails>}</div>;
};

export default Details;
