import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
        <div className="flex gap-[228px]">
            <section>
                <div>
                    <h1 className="text-xl font-bold font-outfit mb-6">Contact us</h1>

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

            <section>
                <div>
                    <h1 className="text-xl font-bold font-outfit mb-6">Help</h1>

                    <p className="text-xl font-normal font-outfit mb-4">FAQ</p>
                    <p className="text-xl font-normal font-outfit mb-4">Payment Methods</p>
                    <p className="text-xl font-normal font-outfit">Contact us</p>
                </div>

            </section>

            <section>
                <div>
                    <h1 className="text-xl font-bold font-outfit mb-6">Site map</h1>

                    <p className="text-xl font-normal font-outfit mb-4">Home</p>
                    <p className="text-xl font-normal font-outfit mb-4">Products</p>
                    <p className="text-xl font-normal font-outfit">Contact us</p>
                </div>

            </section>

            <section>
                <div className="flex flex-col gap-6">
                    <h1 className="text-xl font-bold font-outfit">Follow us</h1>

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