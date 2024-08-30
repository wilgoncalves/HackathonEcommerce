import NavBar from '../../components/navBar/index'
import Header from '../../components/header'

function Home(){

    return (
        <div className='flex flex-col justify-center mt-4 items-center'>
            <NavBar />
            <Header />
        </div>
    )
}

export default Home