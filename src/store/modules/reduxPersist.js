import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
  // Armazenamento do estado no Local Storage do navegador (por padrão)
  const persistedReducers = persistReducer(
    {
      key: 'Nome_da_Aplicacao',
      storage,
      whitelist: ['exampleReducer'], // Pode ir adicionando outros reducers
    }, 
    reducers
  );

  return persistedReducers;
}