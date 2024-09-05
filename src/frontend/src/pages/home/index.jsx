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

import Header from "../../sections/header";
import Highlights from "../../sections/highlights";
import NavBar from "../../sections/navBar";

import { useEffect, useState } from "react";
import Cart from "../../components/cart/cart";
import axios from "../../services/axios";
import Contact from "../../sections/contact";

function Home() {
  const itemCount = 5;

  return (
    <div className="flex flex-col w-full justify-center mt-4 items-center">
      {console.log(productList)}
      <CartButton itemCount={itemCount} />
      <NavBar />
      <Header />
      <Highlights />
      <Catalog />

      <Cart />

      <Contact />

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
      </Routes>
    </Router>
  );
}

export default App;
