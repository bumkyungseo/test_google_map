import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"

const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#/">Home</Nav.Link>
        <Nav.Link href="#/map">Map</Nav.Link>
        <Nav.Link href="#/graph">Graph</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu