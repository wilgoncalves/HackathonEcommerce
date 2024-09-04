import { legumes } from "../../../Data"

import { FaPlus, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';

const Legumes = () => {
    return (
        <div className="legumes py-10">
            <div className="section-title flex justify-between items-center">
                <h2 className="font-caveat white-normal text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-blackNormal">
                    Legumes
                </h2>
                <a href="#" className="flex items-center">
                    <span className="text-secondaryGreen text-lg font-medium mr-2">Ver tudo</span>
                    <FaArrowRight />
                </a>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                350: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                744: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {legumes.map(({ name, price, image, description }, index) => (

                    <SwiperSlide key={index} className="border border-gray-200 hover:border-gray-300 rounded-lg p-4">
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div> 
    )
}

export default Legumes