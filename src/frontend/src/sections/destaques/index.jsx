import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../../CartContext.jsx";
import ScrollingBanner from "../../components/ScrollingBanner";
import { destaques } from "../../Data";

const Destaques = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flex flex-col w-full md:w-full mt-6 pb-11 md:mt-10 lg:mt-20 items-center bg-darkerGreen">
      <div className="bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen w-full font-outfit font-semibold py-5 text-whiteNormal text-center">
        <ScrollingBanner />
      </div>
      <div className="flex flex-col w-[90%] mt-6 md:mt-10 lg:mt-15">
        <div className="highlights">
          <h2
            id="destaques"
            className="highlights-title font-caveat white-normal text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-whiteNormal"
          >
            Destaques
          </h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              744: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            className="mySwiper highlight-products"
          >
            {destaques.map(({ name, price, image, description }, index) => (
              <SwiperSlide
                key={index}
                className="product-container bg-whiteNormal lg:px-4 py-2 font-outfit font-medium text-[14px] lg:text-[16px] xl:text-[20px] text-black-normal rounded-lg"
              >
                <div className="flex flex-row p-7 items-center space-x-6">
                  <div className="product-info space-y-3 w-[70%]">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-darkFadeColor text-[14px] ">
                      {description}
                    </p>
                    <hr className="text-darkFadeColor"></hr>
                    <div className="flex items-center space-x-3">
                      <p className="product-price font-bold text-2xl">
                        R$ {price}
                      </p>
                      <div
                        className="bg-redNormal p-2 rounded-full cursor-pointer"
                        onClick={() =>
                          addToCart({ name, price, image, description })
                        }
                      >
                        <FaPlus className="text-whiteNormal" />
                      </div>
                    </div>
                  </div>
                  <div className="product-image">
                    <img src={`./assets/products/${image}`} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Destaques;
