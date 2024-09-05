import ProductCarousel from "../../components/carrossel";
import { frutas, legumes, verduras } from "../../Data";

const Catalog = () => {
    return (
        <div className="flex flex-col w-full md:w-full pb-11 items-center bg-whiteNormal">
            <div className="flex flex-col w-[90%] mt-6 md:mt-10 lg:mt-15">
            <ProductCarousel title="Frutas" products={frutas} />
            <ProductCarousel title="Verduras" products={verduras} />
            <ProductCarousel title="Legumes" products={legumes} />
            </div>
        </div>
    )
}

export default Catalog