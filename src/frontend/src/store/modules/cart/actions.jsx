import * as types from '../types';

export function cartRequest(payload) {
    console.log('action request');
    return {
        type: types.CART_ADD_PRODUCT_REQUEST,
        payload,
    }
}
export function cartSuccess(payload) {
    console.log('action success');
    return {
        type: types.CART_ADD_PRODUCT_SUCCESS,
        payload,
    }
}
export function cartFailure(payload) {
    return {
        type: types.CART_ADD_PRODUCT_FAILURE,
        payload,
    }
}