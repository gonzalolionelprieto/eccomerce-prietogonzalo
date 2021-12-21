import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import Cartwidget from "../CartWidget";
const NavBar = () => {
  return (
    <div>
      <Navbar variant="light" bg="" expand="lg">
        <Container>
          <Link to="/"  className="nav-link">INICIO</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/categoria/gorras">GORRAS</Link>
              <Link className="nav-link" to="/categoria/remeras">REMERAS</Link>
              <Link className="nav-link" to="/cart">CART</Link>
              
            </Nav>
          </Navbar.Collapse>
          <Cartwidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
