import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesCard = (Props) => {
  const { id, name, img } = Props.card;
  return (
    <Col>
      <Card>
        <Card.Img className="image" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={`/services/${id}`}>
            <button type="button" className="btn btn-info">
              View Details
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServicesCard;
