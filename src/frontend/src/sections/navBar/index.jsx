import { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/logo-tana-cesta2.png';
import Button from '../../components/Button/index';
import Searchbar from '../../components/searchBar/index';
import { TiShoppingCart } from "react-icons/ti";
import { FaUser, FaHeart, FaBars } from "react-icons/fa";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-row-reverse md:flex-row gap-2 w-full md:w-[95%] justify-between items-center p-4'>
      <div className='hidden lg:block w-[250px] lg:w-[350px]'>
        <img src={Logo} alt="Logo Tá na Cesta" />
      </div>

      <div className="md:hidden relative flex justify-start md:w-full">
      <button onClick={toggleMenu} className="text-3xl">
          <FaBars />
        </button>

        {isMenuOpen && (
          <div 
          ref={menuRef}
          className="absolute top-[40px] right-0 w-[80px] bg-opacityDarkLight rounded-xl shadow-lg z-10">
            <Button label="Home" />
            <Button label="Destaques" />
            <Button label="Produtos" />
            <Button label="Contato" />
            <Button label="Perfil" />
            <Button label="Carrinho" />
          </div>
        )}
      </div>

      <div className='hidden md:flex flex-row w-full gap-2 lg:gap-6 justify-end'>
        <Button label="Home" />
        <Button label="Destaques" />
        <Button label="Produtos" />
        <Button label="Contato" />
      </div>

      <div className='flex flex-row gap-4 w-full'>
        <div className='flex w-full justify-center items-center'>
          <Searchbar />
        </div>
        <div className='hidden md:flex flex-row w-full gap-2 lg:gap-4 text-[24px] lg:text-[30px] justify-center'>
          <FaHeart />
          <FaUser />
          <TiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;