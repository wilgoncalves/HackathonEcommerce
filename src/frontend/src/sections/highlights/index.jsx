import {highlights} from "../../Data"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Hightlights = () => {
    return (
        <div className="flex flex-col w-full md:w-full mt-6 md:mt-10 lg:mt-20 items-center bg-darkerRed">
            <div className="bg-gradient-to-r from-redNormal via-redNormal to-darkRed w-full font-outfit font-semibold px-4 md:px-8 py-5 text-whiteNormal text-center">
                QUALIDADE - PEDIDO ONLINE - ENTREGA RÁPIDA - PRODUTOS FRESCOS
            </div>
            <div className="flex flex-col w-full md:w-[95%] mt-6 md:mt-10 lg:mt-20">
                <div className="highlights">
                    <h2 className="highlights-title font-caveat white-normal text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-whiteNormal">
                        Destaques
                    </h2>
                    <Swiper 
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      540: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper highlight-products"
                    >
                        {highlights.map(({name, price, description},index)=> {
                            return (
                                <SwiperSlide className="product-container bg-whiteNormal px-2 lg:px-4 py-2 font-outfit font-medium text-[14px] lg:text-[16px] xl:text-[20px] text-black-normal rounded">
                                    <div className="flex flex-row">
                                        <div className="product-info">
                                            <h3>{name}</h3> 
                                            <span>{description}</span>
                                            <div className="product-price">
                                                {price}
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <img src="../." alt="" />
                                        </div>
                                    </div>
                                    
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                div.
            </div>
        </div>
    )
}

export default Hightlights