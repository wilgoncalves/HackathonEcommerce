import { FaSearch } from "react-icons/fa"
const SearchbarComponent = () => {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-400"/>
            </span>
            <input
                type="text"
                placeholder="Pesquisar"
                className="font-outfit font-medium text-xl text-bold bg-primaryDarkLight rounded-xl px-3 py-1 pl-10
                border-2 outline-none hover:border-redNormal hover:shadow-redNormal focus:border-redNormal focus:shadow-redNormal shadow-md shadow-blackNormal"
            />
        </div>
    )
}

export default SearchbarComponent