import React, {useState, useEffect} from "react";
import {Row, Col, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, addToCart } from "../store/action";

function Products ({ sumProduct }) {
    const [dataProduct, setDataProduct] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // const stateRedux = useSelector(state => state)
    // console.log(state.Redux)
    const Products = useSelectore(state => state.products) 
    
 // mengambil data API dengan useeffect
    useEffect(async () => {
        await dispatch(fetchProduct())
        // fetch("https://6247d3b64bd12c92f4041c17.mockapi.io/products")
        // .then((response) => response.json())
        // .then((data) => {
        //     // console.log(data)
        //     if (sumProduct){
        //         const produk = data?.slice(0, sumProduct);
        //         setDataProduct(produk)
        //     } else {
        //         setDataProduct(data)
        //     }
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }, []); 

    useEffect(() => {
        if (sumProduct) {
            const newProduct = products?.slice(0, sumProduct);
            setDataProducts(newProducts);
        } else {
          setDataProducts(products)
        }
    }, [sumProduct, products])

    //cara mengambil id untuk satu detail
    const toDetails = (id) => {
        navigate ('/product/' + id)
    };

    const checkSoldout = (Product) => {
      if (product?.quantity > 0) {
          return false
      } else { 
          return true
      }
    }
    
    return(
        <div>
            <Row xs={2} md={4} className="g-4">
                {dataProducts?.map((Product) => (
                <Col key= {Products?.id} style={{ cursor: "pointer" }}>
                    <Card>
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
                                {
                                   checkSouldout(product)
                                   ? null
                                   : <div 
                                       onClick={() => 
                                         //console.log (`add cart products ${Products?.id}')
                                         dispatch(addToCart(product))
                                        }
                                    >
                                     <FontAwesomeIcon icon={faCartShopping} />
                                    </div>

                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    );
}

export default Products 