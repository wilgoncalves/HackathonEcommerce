import * as types from '../types';

export function getAllProductsRequest() {
    return {
        type: types.PRODUCTS_GETALL_REQUEST,
    }
}

export function getAllProductsSuccess(payload) {
    return {
        type: types.PRODUCTS_GETALL_SUCCESS,
        payload
    }
}

export function getAllProductsFailure(payload) {
    return {
        type: types.PRODUCTS_GETALL_FAILURE,
        payload
    }
}