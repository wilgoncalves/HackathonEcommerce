import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import { CartProvider } from './CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <Home />
    </CartProvider>
  </StrictMode>
)
