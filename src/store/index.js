import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'; // Vai ser um middleware entre a ação e o reducer

// Os roots acumulativos
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Persistência do estado no navegador
import { persistStore } from 'redux-persist';
import persistedReducers from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware(); // Cria o middleware

// Passa o middleware para o store, e também reveste o rootReducer com o persistedReducers
const store = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga); 
// Pode ser usado apenas depois de aplicar o middleware (store)

export const persistor = persistStore(store); // Exporta o pesistor que irá no PersistGate que revestirá o App.js
export default store;
