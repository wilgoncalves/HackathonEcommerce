import { useSelector } from 'react-redux';

export default function Cart() {
    const products = useSelector(state => state.cart.products);

    return (
        <div className='w-[100px] h-[100px] bg-red-700'>
            {products.map((p, index) => (
                <div key={index}>
                    <p>{p}</p>

                </div>
            ))}
        </div>
    )
}