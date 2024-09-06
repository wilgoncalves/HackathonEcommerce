import { useContext, useState } from "react";
import { CartContext } from "../../CartContext.jsx";
import Logo from "../../assets/logo-tana-cesta.png";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, calculateTotal } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleFinalizeOrder = () => {
    if (name && phone) {
      setName("");
      setPhone("");
      alert("Pedido finalizado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleCart = () => {
    navigate("/carrinho");
  };

  return (
    <div className="container font-outfit w-[60%] mx-auto mt-4 rounded-3xl p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-row justify-center gap-16 items-center h-[250px]">
       <img src={Logo} alt="Logotipo Tá na Cesta" 
       className="w-[250px]"
       />
       <h2 className="text-6xl font-semibold font-caveat mb-6">Checkout</h2>
      </div>
      <div
      className="flex gap-2 m-2 cursor-pointer items-center">
      <FaPlus className="text-redNormal" />
      <span onClick={handleClose}>
      Adicionar Produtos
      </span>
      |
      <span onClick={handleCart}>
      Voltar na cesta
      </span>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 border-b border-gray-200"
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
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">
                    R${parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="text-lg">{item.quantity}x</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total a pagar:</h3>
          <p className="text-2xl font-semibold">
            R${calculateTotal().toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col mt-6 w-[300px]">
          <h3 className="text-xl font-bold mb-4">Informações do Cliente</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Celular</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleFinalizeOrder}
            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all"
          >
            Enviar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
