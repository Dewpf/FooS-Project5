import { Form, Button, Container } from "react-bootstrap";

function LoginPage() {
  return (
    <Container>
      <div className="row row-cols-2">
        <div>
          <img
            src="https://res.cloudinary.com/skilvul/image/upload/v1648863714/assets%20img/project-5-final/undraw_login_re_4vu2_e0hzqv.svg"
            height="100%"
            width="90%"
            alt="img-login"
          />
        </div>
        <div>
          <h1 className="text-center mb-3">Masuk</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Masukin Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Masuk
              </Button>
            </div>
          </Form>
          <div>Sudah punya akun ? Daftar disini !</div>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
