import { Form, Button, Container } from "react-bootstrap";
import { useNavigate} from "react-router-dom"
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {
  // move page
  const navigate = useNavigate()

  // 
  const [ form, setForm] = useState({
    email: '',
    password: ''
  })

  // cara mengatur sandi sama atau tidak dengan konfirmasi
  const [isPassMatch, setIsPassMatch] = useState(true)


  // get data(target) nilai(value)
  const changeEmail = (e) => {
      // console.log(e.target?.value)
      const value = e.target?.value
      setForm ({
        ...form,
        email: value
      })
  }

  const changePassword = (e) => {
    // console.log(e.target?.value)
    const value = e.target?.value
    setForm ({
      ...form,
      password: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
      // console.log(form)

      // kondisi untuk mengambil data yang ada di mockAPI daftar
      if ( form.email && form.password){
        fetch('https://6247d3b64bd12c92f4041c17.mockapi.io/users')
        .then(Response => Response.json())
        .then(data => {
          // console.log(data)
          const userData = data?.find(user => (user?.email === form.email) && (user?.password === form.password))
          if (userData){
            console.log('Anda berhasil masuk')
            toast.success('🦄 Anda berhasil masuk', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
              localStorage.setItem('userLogin', form.email)
              navigate('/')
          } else {
            console.log('Anda gagal masuk!! Silahkan coba lagi')
            toast.error('Kata sandi anda salah!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined, 
              });
          }
        })
        .catch (err => console.log(err))
      } 
         
  }

  // untuk toast
  const [showError, setShowError] = useState (false)


  return (
    <Container style={{ marginTop: '100px'}}>
      <ToastContainer />
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
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Masukin Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={form.email} onChange={(e) => changeEmail(e)} />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.password} onChange={(e) => changePassword(e)} />
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
          <div style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid blue",
              paddingTop: "20px",
              cursor: "pointer"
            }}
              onClick ={() => navigate("/register")}
            >
              Sudah punya akun ? Daftar disini !
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
