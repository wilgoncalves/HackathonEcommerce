import Button from '../../components/Button/index'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Header = () => {
    return (
        <div className="flex flex-col w-[1280px] mt-20 items-center">
            <span className="text-secondaryGreen font-outfit font-extrabold text-2xl">PEÇA ONLINE</span>
            <span className="font-caveat text-[100px] text-center">Frutas, Legumes e Verduras fresquinhos todos os dias!</span>
            <span className="mt-6 font-outfit font-semibold text-2xl">
                Praticidade e conforto: Compre online e receba em casa
            </span>
            <div className="flex flex-row font-outfit font-semibold gap-6 mt-6 text-darkFadeColor">
                <span className="ring-4 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
                    Ingredientes frescos e de qualidade
                    </span>
                <span className="ring-4 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
                    Entrega rápida e eficiente
                    </span>
                <span className="ring-4 ring-primaryDarkLight px-4 py-3 rounded-xl hover:ring-darkFadeColor">
                    Mais saúde e sabor para você
                    </span>
            </div>
            <div className='mt-10 h-10'>
                <Button 
                label="Peça agora e experimente"
                className="bg-gradient-to-r from-redNormal via-redNormal to-blackNormal w-full font-outfit font-semibold px-8 py-4 
                text-whiteNormal rounded-xl hover:text-whiteNormal hover:border-4 hover:border-scale-105"
                />
            </div>
            <div className='flex flex-row mt-20 text-5xl gap-4'>
            <FaInstagram />
            <FaFacebookSquare />
            <FaTwitterSquare />
            </div>
            
        </div>
    )
}

export default Header