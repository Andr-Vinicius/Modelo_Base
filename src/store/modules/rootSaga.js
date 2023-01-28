import {all} from 'redux-saga/effects';
import exampleRequest from './example/sagas';

// Função geradora, o yield acaba sendo uma espécie de await
export default function* rootSaga(){
  return yield all([exampleRequest]); // Roda e acumula em paralelo vários processos
}