import { Navbar, Nav } from "react-bootstrap";
function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">Logo Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>sub brand 1</Nav.Link>
            <Nav.Link>sub brand 2</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
