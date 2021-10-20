import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DoctorCard from "../DoctorCard/DoctorCard";

const Doctors = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./doctors.JSON")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  // console.log(cards);
  return (
    <Container>
      <h1 className="text-success">Meet Our Specialists</h1>
      <Row xs={1} md={3} className="g-5 mt-3">
        {cards.map((card) => (
          <DoctorCard key={card.id} card={card}>
            >
          </DoctorCard>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
