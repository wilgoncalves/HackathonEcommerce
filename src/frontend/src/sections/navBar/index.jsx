import Logo from '../../assets/logo-tana-cesta.png'
import Button from '../../components/Button/index'
import Searchbar from '../../components/searchBar/index'
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const NavbarComponent = () => {
    return (
      <div className='flex flex-row gap-8 w-[1280px] justify-between items-center'>
        <div className='w-[300px]'>
            <img src={Logo} alt="Logo Tá na Cesta" />
        </div>
        <div className='flex flex-row w-[100%] gap-4 justify-end'>
        <Button label="Home" />
        <Button label="Destaques" />
        <Button label="Produtos" />
        <Button label="Contato" />
        </div>
        <div className='flex flex-row gap-4 w-[100%]'>
            <div className='flex flex-row justify-start w-[100%]'>
            <Searchbar />
        </div>
        <div className='flex flex-row w-[100%] gap-8 text-[36px] justify-center'>
        <FaHeart />
        <FaUser />
        <TiShoppingCart />
        </div>
        </div>
        
      </div>
    );
  };
  
  export default NavbarComponent;

