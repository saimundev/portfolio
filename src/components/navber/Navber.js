import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import resome from "../../assets/image/resome.pdf"
import "./Navber.css"

const Navber = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="fixed-top" >
        <Container>
          <Navbar.Brand href="#home" className="nav__logo">Saimun</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#do">What i do?</Nav.Link>
              <Nav.Link href="#skill">Skills</Nav.Link>
              <Nav.Link href="#project">Prodects</Nav.Link>
              <Nav.Link href="#conteck">Conteck</Nav.Link>
              <Nav.Link className="d-block" download="resome" href={resome}>
              <button className="nav__resume d-block">Resume</button>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
