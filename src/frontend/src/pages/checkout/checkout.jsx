import { useContext, useState } from "react";
import { CartContext } from "../../CartContext.jsx";
import Logo from "../../assets/logo-tana-cesta.png";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, calculateTotal } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const recipientPhoneNumber = "5512999999999";

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove todos os caracteres que não sejam dígitos
    if (input.length > 11) input = input.slice(0, 11); // Limita a 11 dígitos

    // Aplica a formatação de celular
    if (input.length > 6) {
      input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7)}`;
    } else if (input.length > 2) {
      input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    } else if (input.length > 0) {
      input = `(${input}`;
    }

    setPhone(input);
  };

  const handleFinalizeOrder = () => {
    // Verifica se o campo de telefone está completo
    const phoneDigits = phone.replace(/\D/g, ""); // Remove a formatação para obter apenas os dígitos

    if (name && phoneDigits.length === 11) {
      const orderNumber = generateOrderNumber();

      const orderSummary = cartItems
        .map(
          (item) =>
            `${item.quantity}x ${item.name} - R$ ${(
              parseFloat(item.price) * item.quantity
            ).toFixed(2)}`
        )
        .join("\n");

      const total = calculateTotal().toFixed(2);
      const message = `Olá, meu nome é ${name}.\n\nAqui está o resumo do meu pedido:\n\nNúmero do Pedido: ${orderNumber};\n\n${orderSummary};\n\nTotal a pagar: R$ ${total};\n\nPor favor, entre em contato comigo pelo número ${phone}.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${recipientPhoneNumber}?text=${encodedMessage}`;

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 500);

      setName("");
      setPhone("");
      toast.success("Pedido finalizado com sucesso!");
    } else {
      // Exibir o toast de erro
      toast.error("Por favor, preencha todos os campos corretamente.");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleCart = () => {
    navigate("/carrinho");
  };

  return (
    <div className="container font-outfit lg:w-[60%] w-[95%] mx-auto mt-4 rounded-3xl p-4 bg-gray-100 min-h-screen">
       <ToastContainer />
      <div className="flex md:flex-row flex-col justify-center md:gap-16 items-center h-[250px]">
        <img
          src={Logo}
          alt="Logotipo Tá na Cesta"
          className="md:w-[250px] w-[200px]"
        />
        <h2 className="md:text-6xl text-4xl font-semibold font-caveat mb-6">
          Checkout
        </h2>
      </div>
      <div className="flex text-[12px] md:text-[18px] gap-2 m-2 cursor-pointer items-center">
        <FaPlus className="text-redNormal" />
        <span onClick={handleClose}>Adicionar Produtos</span>|
        <span onClick={handleCart}>Voltar na cesta</span>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {cartItems.map((item, index) => {
            const totalPorProduto = parseFloat(item.price) * item.quantity;

            return (
              <li
                key={index}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <div className="flex flex-col md:flex-row items-center space-x-4 justify-between w-full">
                  <div className="flex flex-row justify-start w-full items-center gap-4">
                    <img
                      src={`./src/assets/products/${item.name
                        .split(" ")[0]
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")}.png`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-medium">{item.name}</h3>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                    <p className="text-gray-600 flex flex-row">
                      R$ {parseFloat(item.price).toFixed(2)}{" "}
                      <span className="mx-2"> x {item.quantity}</span>
                    </p>
                    <p className="text-gray-800 font-semibold">
                      Total: R$ {totalPorProduto.toFixed(2)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex justify-between items-center">
          <h3 className="md:text-xl font-bold">Total a pagar:</h3>
          <p className="md:text-2xl font-semibold">
            R$ {calculateTotal().toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col mt-6 md:w-[300px] w-90%">
          <h3 className="md:text-xl font-bold mb-4">Informações do Cliente</h3>
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
              onChange={handlePhoneChange}
              placeholder="(XX) XXXXX-XXXX"
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
