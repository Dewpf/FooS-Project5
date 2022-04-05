import React, { Component } from 'react'
import { Container, Row, Col} from "react-bootstrap"
import { API_URL } from '../Data_URL'
import axios from 'axios'

export default class MenuPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         menus: [],
      }
    }

    componentDidMount(){
        axios.get(API_URL+"products")
            .then(res => {
                // console.log("response", res)
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(err => {
                console.log("error maszeehhh", err)
            })
    }
    
    render() {
        // console.log(this.state.menus)
        return (
            <div  style={{
                marginTop: "2px",
                paddingTop: "6px",
                cursor: "pointer"
            }}>
                <Container>
                    <Row>
                        <Col><strong>Makanan</strong></Col>
                        <Col><strong>Minuman</strong></Col>
                        <Col><strong>Cemilan</strong></Col>
                        <Col><strong>Oleh-Oleh</strong></Col>
                    </Row>
                    {menus && menus.map((menu) =>(
                        <h2>{menu.id}</h2>
                    ))}
                </Container>
            </div>
        )
    }
}
