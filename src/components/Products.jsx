import React, {useState, useEffect} from "react";
import {Row, Col, Card} from "react-bootstrap"

function Products (){
    // data produk
    const [dataProduct, setDataProduct] = useState([])

    // mengambil data API dengan useeffect
    useEffect(() => {
        fetch("https://6247d3b64bd12c92f4041c17.mockapi.io/products")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
        setDataProduct(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return(
        <div>
            <Row xs={2} md={3} className="g-4">
                {dataProduct?.map((_, idx) => (
                <Col>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
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