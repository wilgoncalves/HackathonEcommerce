import { useContext } from "react";
import { CartContext } from "../../CartContext.jsx";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-tana-cesta.png";
import { FaPlus } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(index, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout");
    } else {
      alert("Seu carrinho está vazio!");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="container font-outfit lg:w-[60%] mx-auto mt-4 rounded-3xl p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-row justify-center gap-10 items-center h-[250px]">
       <img src={Logo} alt="Logotipo Tá na Cesta" 
       className="md:w-[250px] w-[200px]"
       />
      </div>
      <div onClick={handleClose}
      className="flex gap-2 m-2 text-[12px] md:text-[16px] cursor-pointer items-center">
      <FaPlus className="text-redNormal" />
      Adicionar Produtos | Fechar Cesta
      </div>
      {cartItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row md:justify-between items-center p-4 border-b border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={`./src/assets/products/${item.name
                      .split(" ")[0]
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")}.png`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="md:text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">
                      R${parseFloat(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() =>
                      handleQuantityChange(index, item.quantity - 1)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(index, item.quantity + 1)
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total a pagar:</h3>
            <p className="text-2xl font-semibold">
              R${calculateTotal().toFixed(2)}
            </p>
          </div>
          <div className="flex mt-10 w-full justify-center">
            <button
              onClick={handleCheckout}
              className="md:text-[20px] bg-transparent mb-16 md:mb-8 border-2 border-whatsappColor 
              text-whatsappColor px-12 py-3 rounded-full hover:bg-whatsappColor hover:text-white transition-all"
            >
              Finalizar Cesta
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Seu carrinho está vazio</p>
      )}
    </div>
  );
};

export default Cart;
