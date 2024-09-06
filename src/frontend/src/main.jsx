import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import { CartProvider } from './CartContext.jsx';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <CartProvider>
    <PersistGate persistor={persistor}>
    <Home />
    </PersistGate>
    </CartProvider>
    </Provider>
  </StrictMode>
)
