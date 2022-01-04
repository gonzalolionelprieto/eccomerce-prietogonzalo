import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import Cartwidget from "../CartWidget";
const NavBar = () => {
  return (
    <div>
      <Navbar variant="light" bg="" expand="lg" className="navbar-dark bg-dark fixed-top">
        <Container>
          <Link to="/"  className="navbar-brand ">INICIO</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/categoria/gorras">Gorras</Link>
              <Link className="nav-link" to="/categoria/Remeras">Remeras</Link>
              <Link className="nav-link" to="/cart">Cart</Link>
              
            </Nav>
          </Navbar.Collapse>
          <Cartwidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
