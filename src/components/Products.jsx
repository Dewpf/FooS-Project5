import React, {useState, useEffect} from "react";
import {Row, Col, Card} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

// parameter sumProduct hanya untuk menampilkan beberapa produk di home
function Products ({ sumProduct }){
    const navigate = useNavigate()


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

    //cara mengambil id untuk satu detail
    const toDetails = (id) =>{
        navigate ('/product/' + id)
    }
    
    return(
        <div>
            <Row xs={2} md={4} className="g-4">
                {dataProduct?.map((Products) => (
                <Col key= {Products?.id}>
                    <Card style={{ cursor: "pointer"}}>
                        <Card.Img variant="top" src={Products?.imgUrl} 
                            onClick={() => {
                                toDetails(Products?.id)
                                // console.log (`dd cart products ${Products?.id}`)}
                            }}
                        />
                        <Card.Body style={{ cursor: "pointer"}}> 
                            <h3 onClick={() => {
                                toDetails(Products?.id)                          
                                }}>{Products?.name}
                            </h3>
                            <Card.Text style={{ display: "flex", justifyContent: "space-between"}}>
                                <div>
                                    <strong>
                                        Rp. {Number(Products?.price).toLocaleString("id-ID")}                           
                                    </strong>
                                </div >
                                <div onClick={() => {
                                console.log (`add cart products ${Products?.id}`)}
                                }>
                                    <strong>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </strong>
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