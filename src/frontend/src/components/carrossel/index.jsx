import PropTypes from "prop-types";
import { FaPlus, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';

const ProductCarousel = ({ title, products }) => {
  return (
    <div id="produtos" className="product-carousel">
      <div className="section-title flex justify-between items-center">
        <h2 className="font-caveat text-[30px] md:text-[50px] lg:text-[50px] pb-4 text-left text-blackNormal">
          {title}
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
        {products.map(({ name, price, image, description }, index) => (
          <SwiperSlide
            key={index}
            className="border border-gray-200 hover:border-gray-300 rounded-lg p-4"
          >
            <div className="flex flex-row p-7 items-center space-x-6">
              <div className="product-info space-y-3 w-[70%]">
                <h3 className="font-bold text-xl">{name}</h3>
                <p className="text-darkFadeColor text-[14px]">{description}</p>
                <hr className="text-darkFadeColor"></hr>
                <div className="flex items-center space-x-3">
                  <p className="product-price font-bold text-2xl">R${price}</p>
                  <div className="bg-redNormal p-2 rounded-full">
                    <FaPlus className="text-whiteNormal" />
                  </div>
                </div>
              </div>
              <div className="product-image">
                <img src={(`./src/assets/products/${image}`)} alt={name} />
              </div>
            </div>
          </SwiperSlide>
        ))}
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
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductCarousel;
