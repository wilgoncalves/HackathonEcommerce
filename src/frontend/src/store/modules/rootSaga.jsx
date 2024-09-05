import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
// coleta todos os sagas completos para aplicar no middleware

export default function* rootSaga() {
    return yield all([cart]);
}