import { combineReducers } from '@reduxjs/toolkit';
import cart from './cart/reducer';
import products from './products/reducer';

// Combina todos os reducers para serem importados no arquivo Main
export default combineReducers({
    cart: cart,
    products: products
});