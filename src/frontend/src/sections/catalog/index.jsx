import { all_products } from "../../Data"
import { FaPlus } from "react-icons/fa";

const Catalog = () => {
    return (
        <div className="flex flex-col w-full md:w-full pb-11 items-center bg-whiteNormal">
            <div className="flex flex-col w-[90%] mt-6 md:mt-10 lg:mt-15">
                <h2 className="font-caveat white-normal text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-blackNormal">
                    Sua feira começa aqui!
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {all_products.map(({ name, price, image, description }, index) => (
                        <div key={index} className="border border-gray-200 hover:border-gray-300 rounded-lg">
                            <div className="flex flex-row p-7 items-center space-x-6">
                                <div className="product-info space-y-3 w-[70%]">
                                    <h3 className="font-bold text-xl">{name}</h3>
                                    <p className="text-darkFadeColor text-[14px] ">{description}</p>
                                    <hr className="text-darkFadeColor"></hr>
                                    <div className="flex items-center space-x-3">
                                        <p className="product-price font-bold text-2xl">R${price}</p>
                                        <div className="bg-redNormal p-2 rounded-full">
                                            <FaPlus className="text-whiteNormal" />
                                        </div>
                                    </div>
                                </div>
                                <div className="product-image">
                                    <img src={(`./src/assets/products/${image}`)} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Catalog