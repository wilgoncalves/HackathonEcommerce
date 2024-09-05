import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartButton from "../../components/cart";
import SignupPage from "../../pages/cad-user";
import LoginPage from "../../pages/login";
import Catalog from "../../sections/catalog";
import Header from "../../sections/header";
import Highlights from "../../sections/highlights";
import NavBar from "../../sections/navBar";

import { useEffect, useState } from "react";
import Cart from "../../components/cart/cart";
import axios from "../../services/axios";

function Home() {
  const itemCount = 5;
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
      </Routes>
    </Router>
  );
}

export default App;
