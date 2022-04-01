import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const navigate = useNavigate();

  const movePage = (path) => {
    navigate(path);
  };
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand onClick={() => movePage("/")}>FooS.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={() => movePage("/")}>Beranda</Nav.Link>
          <Nav.Link>Menu</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => movePage("/login")}>Masuk</Nav.Link>
          <Nav.Link onClick={() => movePage("/register")}>Daftar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
