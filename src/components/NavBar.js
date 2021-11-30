import { Navbar,Container,NavDropdown,Nav } from "react-bootstrap";
const NavBar = ()=>{
    return (
       <div> 
           <Navbar variant="dark" bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">MENU</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">INICIO</Nav.Link>
        <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">REMERAS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">BUZOS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">ZAPATILLAS</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">PROMOCIONES</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

       </div> 
    );
}

    


export default NavBar;