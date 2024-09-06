import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../../services/axios';
import * as types from '../types';
import * as actions from './actions';

function* getAllProductsRequest() {
    try {
        const response = yield call(axios.get, '/products')
        const products = response.data;
        yield put(actions.getAllProductsSuccess(products));
    } catch (error) {
        yield put(actions.getAllProductsFailure(error.message));
    }
}


export default function* products() {
    yield takeLatest(types.PRODUCTS_GETALL_REQUEST, getAllProductsRequest);
} 