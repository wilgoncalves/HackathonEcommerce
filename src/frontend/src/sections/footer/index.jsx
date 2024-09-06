import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="w-[100%] px-[104px]">
        <div className="flex justify-between flex-col gap-6 lg:flex-row">
            <section>
                <div>
                    <h1 className="text-xl font-bold font-outfit mb-6">Contate-nos</h1>

                    <div className="flex gap-3 items-center mb-6">
                        <FaPhone />
                        <p className="text-base font-normal font-outfit">999-9999</p>

                    </div>

                    <div className="flex gap-3 items-center">
                        <MdEmail />
                        <p className="text-base font-normal font-outfit">email</p>
                    </div>
                </div>

            </section>

            <div className="h-[128px] w-[2px] bg-[#a8a8a8] mt-5 hidden lg:flex"></div>

            <section>
                <div>
                    <h1 className="text-xl font-bold font-outfit mb-6">Ajuda</h1>

                    <p className="text-xl font-normal font-outfit mb-4">Perguntas frequentes</p>
                    <p className="text-xl font-normal font-outfit mb-4">Métodos de pagamento</p>
                    <p className="text-xl font-normal font-outfit">Contate-nos</p>
                </div>

            </section>

            <div className="h-[128px] w-[2px] bg-[#a8a8a8] mt-5 hidden lg:flex"></div>

            <section>
                <div>
                    <h1 className="text-xl font-bold font-outfit mb-6">Mapa do site</h1>

                    <p className="text-xl font-normal font-outfit mb-4">Home</p>
                    <p className="text-xl font-normal font-outfit mb-4">Produtos</p>
                    <p className="text-xl font-normal font-outfit">Contate-nos</p>
                </div>

            </section>

            <div className="h-[128px] w-[2px] bg-[#a8a8a8] mt-5 hidden lg:flex"></div>

            <section>
                <div className="flex flex-col gap-6">
                    <h1 className="text-xl font-bold font-outfit">Siga-nos</h1>

                    <div className="flex gap-6 items-center">
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
    )
}

export default Footer