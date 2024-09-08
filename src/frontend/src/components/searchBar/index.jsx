import { FaSearch } from "react-icons/fa";
const SearchbarComponent = () => {
  return (
    <div className="flex relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="text-gray-400 text-[14px]" />
      </span>
      <input
        type="text"
        placeholder="Pesquisar"
        className="font-outfit font-medium text-[12px] xl:text-[18px] text-bold bg-primaryDarkLight rounded-xl px-2 py-1 pl-8
                border-2 outline-none hover:border-primaryGreen hover:shadow-primaryGreen focus:border-primaryGreen focus:shadow-primaryGreen shadow-md shadow-blackNormal"
      />
    </div>
  );
};

export default SearchbarComponent;
