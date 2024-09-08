import { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartContext } from "../../CartContext.jsx";
import CartButton from "../../components/cartButton/index.jsx";
import CartPage from "../../pages/cart";
import SignupPage from "../../pages/createUser";
import LoginPage from "../../pages/login";
import Catalog from "../../sections/catalog";
import Contact from "../../sections/contact";
import Highlights from "../../sections/destaques";
import Header from "../../sections/header";
import NavBar from "../../sections/navBar";
import Footer from "../../sections/footer/index.jsx";
import Checkout from "../../pages/checkout/checkout.jsx";

function Home() {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.length;

  return (
    <div className="flex flex-col w-full justify-center mt-4 items-center">
      <CartButton itemCount={itemCount} />
      <NavBar />
      <Header />
      <Highlights />
      <Catalog />
      <Contact />
      <Footer />
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
