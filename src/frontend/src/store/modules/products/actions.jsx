import * as types from '../types';

export function getAllProductsRequest() {
    return {
        type: types.PRODUCTS_GETALL_REQUEST,
    }
}

export function getAllProductsSuccess(products) {
    return {
        type: types.PRODUCTS_GETALL_SUCCESS,
        payload: { products }
    }
}

export function getAllProductsFailure(error) {
    return {
        type: types.PRODUCTS_GETALL_FAILURE,
        payload: { error }
    }
}