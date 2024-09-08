import PropTypes from "prop-types";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../../CartContext.jsx";

const ProductCarousel = ({ title, products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div id="produtos" className="product-carousel">
      <div className="section-title flex justify-between items-center">
        <h2 className="font-caveat text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-blackNormal">
          {title}
        </h2>
        <a href="#" className="flex items-center"></a>
      </div>
      <Swiper
        slidesPerView={3}
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products !== undefined ? (
          products.map(({ name, price }, index) => (
            <SwiperSlide
              key={index}
              className="border border-gray-200 hover:border-gray-300 rounded-lg p-4"
            >
              <div className="flex flex-row p-5 items-center space-x-6 ">
                <div className="product-info space-y-3 w-[70%]">
                  <h3 className="font-bold lg:w-[170px] text-[14px] lg:text-xl">{name}</h3>
                  <hr className="text-darkFadeColor"></hr>
                  <div className="flex items-center space-x-3">
                    <p className="product-price font-bold text-[18px] lg:text-2xl">
                      R$ {price.toFixed(2)}
                    </p>
                    <div
                      className="bg-redNormal p-2 rounded-full cursor-pointer"
                      onClick={() => addToCart({ name, price })}
                    >
                      <FaPlus className="text-whiteNormal text-[12px]" />
                    </div>
                  </div>
                </div>
                <div className="product-image md:w-full w-[80px]">
                  <img
                    src={`./src/assets/products/${name
                      .split(" ")[0]
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")}.png`}
                    alt={name}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div></div>
        )}
      </Swiper>
    </div>
  );
};

ProductCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductCarousel;
