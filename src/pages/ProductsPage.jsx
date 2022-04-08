import React from "react"
import Products from "../components/Products"
import MenuPage from "./Menu"

function ProductsPage (){
    return(
        <div>
            <MenuPage />
            <h1 style={{ margin: "30px 0", textAlign: "center"}}><strong>Semua Products</strong></h1>
            <Products />
        </div>
    )
}

export default ProductsPage