import React from "react";

const CardDetails = (Props) => {
  const { name, image, details } = Props.card;
  return (
    <div className="bg-info">
      <h1>Details info</h1>
      <h1>{name}</h1>
      <img src={image} alt="" srcset="" />
      <p>{details}</p>
    </div>
  );
};

export default CardDetails;
