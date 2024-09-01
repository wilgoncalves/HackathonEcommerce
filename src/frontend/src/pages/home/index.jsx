import NavBar from '../../sections/navBar'
import Header from '../../sections/header'
import Hightlights from '../../sections/highlights'

function Home(){

    return (
        <div className='flex flex-col w-full justify-center mt-4 items-center'>
            <NavBar />
            <Header />
            <Hightlights />
        </div>
    )
}

export default Home