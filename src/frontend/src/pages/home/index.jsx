import NavBar from '../../sections/navBar'
import Header from '../../sections/header'

function Home(){

    return (
        <div className='flex flex-col justify-center mt-4 items-center'>
            <NavBar />
            <Header />
        </div>
    )
}

export default Home