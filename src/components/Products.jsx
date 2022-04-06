import React, {useState, useEffect} from "react";
import {Row, Col, Card} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// parameter sumProduct hanya untuk menampilkan beberapa produk di home
function Products ({ sumProduct }){
    // data produk
    const [dataProduct, setDataProduct] = useState([])

    // mengambil data API dengan useeffect
    useEffect(() => {
        fetch("https://6247d3b64bd12c92f4041c17.mockapi.io/products")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            if (sumProduct){
                const produk = data?.slice(0, sumProduct);
                setDataProduct(produk)
            } else {
                setDataProduct(data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [sumProduct])
    return(
        <div>
            <Row xs={2} md={4} className="g-4">
                {dataProduct?.map((Products) => (
                <Col key= {Products?.id}>
                    <Card>
                    <Card.Img variant="top" src={Products?.imgUrl} />
                    <Card.Body> 
                        <Card.Title>{Products?.name}</Card.Title>
                        <Card.Text style={{ display: "flex", justifyContent: "space-between"}}>
                            <div>
                                Rp. {Number(Products?.price).toLocaleString("id-ID")}                           
                            </div >
                            <div>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}

export default Products 