import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Products from "../components/Products";

function DetailProduct(){
    let param = useParams();
    // console.log (param); 

    const [ product, setProduct] = useState()

    useEffect(() => {
        if (param?.id) {
          const id = param?.id;
          fetch("https://6247d3b64bd12c92f4041c17.mockapi.io/products/" + id)
            .then((response) => response.json())
            .then((data) => {
              // console.log(data);
              setProduct(data);
            })
            .catch((err) => console.log(err));
        }
      }, [param]);

    return(
        <div>
            <h1 style={{ margin: "30px 0", textAlign: "center"}}><strong>Detail Products</strong></h1>
            <div className="row row-cols-2">
                <div>
                    <img 
                        src={Products?.imgUrl}
                        alt="img-details"
                        height="100%"
                        width="100%"
                    />
                </div>
                <div>
                    <h3>{Products?.name}</h3>
                </div>
            </div>

        </div>
    )
}

export default DetailProduct