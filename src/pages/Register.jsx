import { Form, Button, Container } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import React, { useState } from "react";

function RegisterPage() {
  // move page
  const navigate = useNavigate()

  const [ form, setForm ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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

  // kondisi biar pass bisa sama
    if (form.confirmPassword && value){
      if (value !== form.confirmPassword){
        setIsPassMatch(false)
      } else{
        setIsPassMatch(true)
      }
    }
  }

const changeConfirmPassword = (e) => {
  // console.log(e.target?.value)
  const value = e.target?.value
  setForm ({
    ...form,
    confirmPassword: value
  })

  // kondisi biar pass bisa sama
  if (form.password && value){
    if (value !== form.password){
      setIsPassMatch(false)
    } else{
      setIsPassMatch(true)
    }
  }

}

// agar tidak reload sndri saat daftar 
const onSubmit = (e) => {
  e.preventDefault()

  // kondisi
  if (form.email){
    if ( form.password && form.confirmPassword && form.password === form.confirmPassword){
      console.log(form)
      // tinggal panggil BE untuk simpan data regis
      // sblm itu harus membuat DB di mockAPI dulu
      fetch('https://6247d3b64bd12c92f4041c17.mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: form.email,
          password: form.password,
          createdAt: new Date()
        })
      })
      .then(Response => Response.json)
      .then(data => {
        // jika berhasil regis, asumsikan auto login
        // jadi kita masukin auth ke localstorage
        localStorage.setItem('userLogin', form.email)
        navigate('/')
      })
      .then(err => console.log(err))
    }else {
      setIsPassMatch(false)
    }
  }
}

  return (
    <Container style={{ marginTop: '90px'}}>
      <div className="row row-cols-2">
        <div>
          <img
            src="https://res.cloudinary.com/skilvul/image/upload/v1648863713/assets%20img/project-5-final/undraw_mobile_login_re_9ntv_qnx7yn.svg"
            height="90%"
            width="90%"
            alt="img-register"
          />
        </div>
        <div>
          <h1 className="text-center mb-3">Daftar</h1>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Masukin Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={form.email} onChange={(e) => changeEmail(e)}/>
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.password} onChange={(e) => changePassword(e)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Konfirmasi Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.confirmPassword} onChange={(e) => changeConfirmPassword(e)}/>
              
              {/* hanya untuk kondisi jika tidak sama */}
              {
                isPassMatch
                ? <div></div>
                : <div style={{ 
                  fontStyle: 'italic', color: 'red'}}> Password tidak sama ! </div>
                }
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
          <div style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid blue",
              paddingTop: "20px",
              cursor: "pointer"
            }}
              onClick ={() => navigate("/login")}
            >
              Sudah punya akun ? Masuk
          </div>

        </div>
      </div>
    </Container>
  );
}

export default RegisterPage;
