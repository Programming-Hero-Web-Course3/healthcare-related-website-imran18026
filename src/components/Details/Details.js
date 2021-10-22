import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

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

  return (
    <div className="card-style2">
      <Card>
        <img src={result?.img} alt="" />
        <Card.Header as="h2">{result?.name}</Card.Header>
        <Card.Body>
          <h6>{result?.details}</h6>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
