import * as types from '../types';
const initialState = {
    cartItems: [],
};

// Usa os tipos para definir qual estado setar. 
// Inicia com o initialState vazio e adiciona o payload das actions em caso de sucesso ou requisição.

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.CART_ADD_PRODUCT_REQUEST: {
            const newState = { ...state };
            return newState;
        }

        case types.CART_ADD_PRODUCT_SUCCESS: {
            const newState = { ...state };
            newState.cartItems = [...state.cartItems, action.payload.name];
            return newState;
        }

        case types.CART_ADD_PRODUCT_FAILURE: {
            const newState = { ...initialState };
            return newState;
        }

        default:
            return state;
    }
}
