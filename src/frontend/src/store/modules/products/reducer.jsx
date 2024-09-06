import * as types from '../types';
const initialState = {
    products: [],
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.PRODUCTS_GETALL_REQUEST:
            return { ...state };

        case types.PRODUCTS_GETALL_SUCCESS: {
            const newState = { ...state };
            newState.products = action.payload.products;
            return newState;
        }

        case types.PRODUCTS_GETALL_FAILURE: {
            const newState = { ...state };
            newState.error = action.payload.error;
            return newState;
        }


        default:
            return state;
    }
}