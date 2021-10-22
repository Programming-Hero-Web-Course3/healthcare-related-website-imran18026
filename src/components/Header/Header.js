import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "./../../Hooks/useFirebase";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const { handleLogout, user } = useFirebase();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Daily Care Hospital </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              About US
            </Nav.Link>
            {user?.email || user?.displayName ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as:{" "}
              <a href="#login">{user?.displayName || user?.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
