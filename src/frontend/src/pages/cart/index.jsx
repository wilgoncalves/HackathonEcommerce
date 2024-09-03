import { useState } from "react";

const CartPage = () => {
  // Estado inicial simulando produtos no carrinho
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Produto 1', price: 50, quantity: 1 },
    { id: 2, name: 'Produto 2', price: 30, quantity: 1 },
  ]);

  // Atualiza a quantidade do produto
  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove o produto do carrinho
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calcula o valor total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Lógica para finalizar compra
  const handleCheckout = () => {
    alert('Compra finalizada!');
    // Aqui você pode adicionar a lógica para processar a compra
  };

  return (
    <div className="cart-page">
      <h1 className="text-2xl font-semibold mb-4">Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item flex justify-between items-center p-4 mb-2 border rounded">
            <div className="item-details">
              <h2 className="font-semibold">{item.name}</h2>
              <p>Preço: R${item.price}</p>
            </div>
            <div className="item-actions">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.id)}
                className="w-16 p-2 border rounded"
              />
              <button
                onClick={() => handleRemove(item.id)}
                className="ml-4 p-2 bg-red-500 text-white rounded"
              >
                Remover
              </button>
            </div>
            <div className="item-total">
              <p>Total: R${item.price * item.quantity}</p>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary mt-6">
          <h2 className="text-xl font-semibold">Valor Total: R${calculateTotal()}</h2>
          <button
            onClick={handleCheckout}
            className="mt-4 p-3 bg-green-500 text-white rounded"
          >
            Concluir Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
