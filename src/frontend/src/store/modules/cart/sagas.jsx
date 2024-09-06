import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import * as actions from './actions';

// recebe a requisição com o payload e exporta a função mapeada.

function* cartRequest({ payload }) {
    try {
        const { name } = payload
        yield put(actions.cartSuccess({ name }));
    } catch (error) {
        console.log(error);
        yield put(actions.cartFailure());
    }
}

// Cria um middleware que escuta cada dispacho para o armazenamento e mapeia com a função determinada.
// takeLatest pega a última requisição feita e ignora as outras, evitando multiplas requisições do mesmo tipo.

export default function* cart() {
    yield takeLatest(types.CART_ADD_PRODUCT_REQUEST, cartRequest);
}