import "./styles.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import { Container } from "react-bootstrap";
import MenuPage from "./pages/Menu";
import ProductsPage from "./pages/ProductsPage";
import DetailProduct from "./pages/DetailProduct";
import Cartpage from "./pages/Cart";
import CheckoutPage from "./pages/checkout";
import { RequireAult } from "./guard";


export default function App() {
  return (
    <Container>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product/:id" element={<DetailProduct />}></Route>
        <Route path="/cart" element={<Cartpage />}/>
        <Route path="/checkout" element={
            <RequireAult>
              <CheckoutPage />
            </RequireAult>
          }
        ></Route>
      </Routes>
    </Container>
  );
}
