import { useContext } from 'react';
import { CartContext } from '../../CartContext.jsx';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout'); // Redireciona para a página de checkout
  };
  
  // Função para atualizar a quantidade
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(index, newQuantity);
    }
  };

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price); // Converta o preço para número
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Seu Carrinho</h2>
      {cartItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <img 
                    src={`./src/assets/products/${item.image}`} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">R${parseFloat(item.price).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleQuantityChange(index, item.quantity - 1)} 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(index, item.quantity + 1)} 
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
            <p className="text-2xl font-semibold">R${calculateTotal().toFixed(2)}</p>
          </div>
          <div>
            <button onClick={handleCheckout}>
              Enviar pedido
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Seu carrinho esta vazio</p>
      )}
    </div>
  );
};

export default Cart;
