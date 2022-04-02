import { Form, Button, Container } from "react-bootstrap";

function RegisterPage() {
  return (
    <Container>
      <div className="row row-cols-2">
        <div>
          <img
            src="https://res.cloudinary.com/skilvul/image/upload/v1648863713/assets%20img/project-5-final/undraw_mobile_login_re_9ntv_qnx7yn.svg"
            height="100%"
            width="90%"
            alt="img-register"
          />
        </div>
        <div>
          <h1 className="text-center mb-3">Daftar</h1>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Konfirmasi Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Daftar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default RegisterPage;
