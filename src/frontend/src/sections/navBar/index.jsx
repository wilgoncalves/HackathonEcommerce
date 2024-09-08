import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-tana-cesta.png";
import Button from "../../components/Button/index";
import Searchbar from "../../components/searchBar/index";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser, FaHeart, FaBars } from "react-icons/fa";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserClick = () => {
    navigate("/login");
  };
  const handleCartClick = () => {
    navigate("/carrinho");
  };

  return (
    <div
      id="home"
      className="flex flex-row-reverse md:flex-row gap-2 w-full md:w-[95%] justify-between items-center p-4"
    >
      <div className="hidden lg:block w-[250px]">
        <img src={Logo} alt="Logo Tá na Cesta" />
      </div>
      <div className="md:hidden relative flex justify-start md:w-full">
        <button onClick={toggleMenu} className="text-3xl">
          <FaBars />
        </button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-[40px] right-0 w-[80px] bg-opacityDarkLight rounded-xl shadow-lg z-10"
          >
            <a href="#home">
              <Button label="Home" />
            </a>
            <a href="#destaques">
              <Button label="Destaques" />
            </a>
            <a href="#produtos">
              <Button label="Produtos" />
            </a>
            <a href="#contato">
              <Button label="Contato" />
            </a>
          </div>
        )}
      </div>
      <div className="hidden md:flex flex-row w-full gap-2 lg:gap-6 justify-center">
        <a href="#home">
          <Button label="Home" />
        </a>
        <a href="#destaques">
          <Button label="Destaques" />
        </a>
        <a href="#produtos">
          <Button label="Produtos" />
        </a>
        <a href="#contato">
          <Button label="Contato" />
        </a>
      </div>
      <div className="hidden  flex-row gap-4 w-full">
        <div className="flex w-full justify-center items-center">
          <Searchbar />
        </div>
        <div className="hidden md:flex flex-row w-full gap-2 lg:gap-4 text-[24px] lg:text-[30px] justify-center">
          <FaHeart />
          <FaUser onClick={handleUserClick} className="cursor-pointer" />{" "}
          <TiShoppingCart
            onClick={handleCartClick}
            className="cursor-pointer"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
