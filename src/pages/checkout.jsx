import React, { useState } from "react";
import { Card, Form, Button} from "react-bootstrap"
import {useSelector } from "react-redux";
function CheckoutPage() {
  const [ form, setForm ] = useState ({
    name: '',
    telp: '',
    address: '',
    notes: ''
  })

  const onChangeForm, = (e, key) => {
    const value = e?.target?.value
    setForm({
      ...form, 
      [key]: value
    })
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>Checkout</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card style={{ width: "45%", padding='10px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={form.name} onChange={e => onChangeForm(e, 'name')} />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telp Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Telp Number" value={form.telp} onChange={e => onChangeForm(e, 'telp')}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formControlTestArea">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter Address" value={form.address} onChange={e => onChangeForm(e, 'address')}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formControlTestArea">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter Notes"value={form.notes} onChange={e => onChangeForm(e, 'notes')}/>
            </Form.Group>
        </Card>
        <Card style={{ width: "45%" }}>
          <Card.Header>
            <h4 className="text-center">Review Pesanan</h4>
          </Card.Header>
          <Card.Body >
            <div className="d-flex">
              <div style={{ width: '20%'}}>Name</div>
              <div style={{ width: '80%'}}> {form.name}</div>
            </div>
            <div className="d-flex">
              <div style={{ width: '20%'}}>Telp Number</div>
              <div style={{ width: '80%'}}> {form.telp}</div>
            </div>
            <div className="d-flex">
              <div style={{ width: '20%'}}>Address</div>
              <div style={{ width: '80%'}}> {form.address}</div>
            </div>
            <div className="d-flex">
              <div style={{ width: '20%'}}>Notes</div>
              <div style={{ width: '80%'}}> {form.notes}</div>
            </div>
            <div className="d-flex">
              <div style={{ width: '20%'}}>Pesanan</div>
              <div style={{ width: '80%'}}></div>
            </div>

            <div className="d-flex justify-content-center">
              <Button variant="primary" >
                Order 
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CheckoutPage;
