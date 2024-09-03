import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../../sections/navBar";
import Header from "../../sections/header";
import Highlights from "../../sections/highlights";
import CartButton from "../../components/cart";
import LoginPage from "../../pages/login";
import SignupPage from "../../pages/cad-user";
import Catalog from "../../sections/catalog";

function Home() {
  const itemCount = 5;

  return (
    <div className="flex flex-col w-full justify-center mt-4 items-center">
      <CartButton itemCount={itemCount} />
      <NavBar />
      <Header />
      <Highlights />
      <Catalog />
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
