import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

// Cria uma variável no localstorage do navegador para alocar no carrinho os produtos selecionados.
export default reducers => {
    const persistedReducers = persistReducer({
        key: 'TaNaCestaCarrinho',
        storage,
        whitelist: [
            'cart',
            'products'
        ]
    },
        reducers
    );
    return persistedReducers;
};
