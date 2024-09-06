import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[100%] lg:px-[120px] px-[20px]">
      <div className="flex md:justify-between items-center flex-col gap-6 md:flex-row mt-10 md:items-start">
        <section>
          <div className="flex flex-col md:items-start items-center">
            <h1 className="lg:text-xl font-bold font-outfit mb-6">
              Contate-nos
            </h1>
            <div className="flex gap-3 items-center mb-6">
              <FaPhone />
              <a href="https://wa.me/11999999999">
                <p className="text-base font-normal font-outfit">
                  (12)99999-9999
                </p>
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <MdEmail />
              <p className="text-base font-normal font-outfit">email</p>
            </div>
          </div>
        </section>
        <div className="h-[128px] w-[2px] bg-[#a8a8a8] mt-5 hidden lg:flex"></div>
        <section>
          <div className="flex flex-col md:items-start items-center">
            <h1 className="lg:text-xl font-bold font-outfit mb-6">Ajuda</h1>
            <p className="lg:text-xl font-normal font-outfit mb-4">
              Perguntas frequentes
            </p>
            <p className="lg:text-xl font-normal font-outfit mb-4">
              Métodos de pagamento
            </p>
            <a href="https://wa.me/11999999999">
              <p className="lg:text-xl font-normal font-outfit">Contate-nos</p>
            </a>
          </div>
        </section>
        <div className="h-[128px] w-[2px] bg-[#a8a8a8] mt-5 hidden lg:flex"></div>
        <section>
          <div className="flex flex-col md:items-start items-center">
            <h1 className="text-xl font-bold font-outfit mb-6">Mapa do site</h1>
            <a href="#home">
              <p className="lg:text-xl font-normal font-outfit mb-4">Home</p>
            </a>
            <a href="#produtos">
              <p className="lg:text-xl font-normal font-outfit mb-4">
                Produtos
              </p>
            </a>
            <a href="#destaques">
              <p className="lg:text-xl font-normal font-outfit">Destaques</p>
            </a>
          </div>
        </section>
        <div className="h-[128px] w-[2px] bg-[#a8a8a8] mt-5 hidden lg:flex"></div>
        <section>
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-lg:xl font-bold font-outfit">Siga-nos</h1>
            <div className="flex text-5xl gap-4 items-center">
              <FaInstagram />
              <FaFacebookSquare />
              <FaTwitterSquare />
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center mt-[52px] mb-3.5">
        <p className="text-base font-normal font-outfit">E-commerce © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
