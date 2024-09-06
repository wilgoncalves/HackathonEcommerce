import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ProductCarousel from '../../components/carrossel/index';
import * as actions from '../../store/modules/products/actions';

const Catalog = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.products.products);
    const { products } = data;
    const frutas = products.filter(p => p.categoryId === 3);
    const verduras = products.filter(p => p.categoryId === 1);
    const legumes = products.filter(p => p.categoryId === 2);

    useEffect(() => {
        dispatch(actions.getAllProductsRequest());
    }, [dispatch])

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