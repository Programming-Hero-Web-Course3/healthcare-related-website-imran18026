import React from "react";
import "./CardDetails.css";

const CardDetails = (Props) => {
  const { name, img, details } = Props.card;
  return (
    <div className="card-style2">
      <h1>{name}</h1>
      <img src={`${img}`} alt="" />
      <br />
      <p>{details}</p>
    </div>
  );
};

export default CardDetails;
