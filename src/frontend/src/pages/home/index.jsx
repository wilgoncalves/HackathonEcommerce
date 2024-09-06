import { useContext } from 'react';
import { CartContext } from '../../CartContext.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../../sections/navBar";
import Header from "../../sections/header";
import Highlights from "../../sections/destaques";
import CartButton from "../../components/cartButton/index.jsx";
import LoginPage from "../../pages/login";
import SignupPage from "../../pages/createUser";
import Catalog from "../../sections/catalog";
import Contact from "../../sections/contact";
import CartPage from "../../pages/cart";
import Checkout from "../../pages/checkout/checkout.jsx";

import { useEffect, useState } from "react";
import Cart from "../../components/cartButton/cart.jsx";
import axios from "../../services/axios";

function Home() {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [productList, setListProducts] = useState([]);


  useEffect(() => {
    const get = async () => {
      const response = await axios.get('products');
      setListProducts(response.data)
    }
    get()
  }, []);

  return (
    <div className="flex flex-col w-full justify-center mt-4 items-center">
      {console.log(productList)}
      <CartButton itemCount={itemCount} />
      <NavBar />
      <Header />
      <Highlights />
      <Catalog />
      <Contact />
      <Cart />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
