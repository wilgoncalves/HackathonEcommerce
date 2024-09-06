import * as types from '../types';
const initialState = {
    products: [],
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.PRODUCTS_GETALL_REQUEST:
            return { ...state };

        case types.PRODUCTS_GETALL_SUCCESS:
            return {
                ...state,
                products: action.payload.products
            };

        case types.PRODUCTS_GETALL_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
}