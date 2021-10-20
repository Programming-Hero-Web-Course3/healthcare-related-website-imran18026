import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <Container>
      <h1 className="mt-5">Our Services</h1>
      <Row xs={1} md={3} className="g-5 mt-3">
        {cards.map((card) => (
          <ServicesCard key={card.id} card={card}></ServicesCard>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
