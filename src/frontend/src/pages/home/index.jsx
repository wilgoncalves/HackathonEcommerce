import NavBar from '../../sections/navBar'
import Header from '../../sections/header'
import Hightlights from '../../sections/highlights'
import CartButton from '../../components/cart';

function Home(){

    const itemCount = 5;

    return (
        <div className='flex flex-col w-full justify-center mt-4 items-center'>
            <CartButton itemCount={itemCount} />
            <NavBar />
            <Header />
            <Hightlights />
        </div>
    )
}

export default Home