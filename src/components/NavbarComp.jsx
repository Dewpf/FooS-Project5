import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const navigate = useNavigate();

  const movePage = (path) => {
    navigate(path);
  };

  // kondisi cara mengagnti navbar masuk dan daftar dengan navbar keluar
  const checkLogin = () => {
    if (localStorage.getItem('userLogin')){
      return true
    } else {
      return false
    }
  }

  // kondisi saat klik keluar maka akan muncul navbar masuk dan daftar
  const logout = () => {
    localStorage.removeItem('userLogin')

    // harus reload dulu jadi menggunakan auto reload
    window.location.reload()
  }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand 
        onClick={() => movePage("/")} 
        style={{ cursor: 'pointer'}}>
          FooS.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={() => movePage("/")}>Beranda</Nav.Link>
          <Nav.Link>Menu</Nav.Link>
        </Nav>
        {
          checkLogin()
          ? <Nav>
              <Nav.Link onClick={() => logout() }> Keluar </Nav.Link>
            </Nav>
          : <Nav>
              <Nav.Link onClick={() => movePage("/login")}>Masuk</Nav.Link>
              <Nav.Link onClick={() => movePage("/register")}>Daftar</Nav.Link>
            </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
