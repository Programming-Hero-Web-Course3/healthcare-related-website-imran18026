import React from "react";
import { Card, Col } from "react-bootstrap";

const DoctorCard = (Props) => {
  const { name, img, details } = Props.card;
  return (
    <Col>
      <Card>
        <Card.Img className="image" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{details}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DoctorCard;
