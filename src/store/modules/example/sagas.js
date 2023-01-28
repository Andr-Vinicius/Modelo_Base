import { call, put, all, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from '../types'

import {toast} from 'react-toastify'

// Requisição simulada
const req = () => new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve();
  }, 1000)
})

function* exampleRequest(){
  try{
    yield call(req); // Cria uma descrição de efeito, que instrui o middleware (no index.js) a chamar a função
    yield put(actions.clicaBotaoSuccess()); // O .put() faz o disparo da ação para o store
  }catch{
    toast.error('DEU ALGUM ERRO HEIN')
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([
  // takeLatest -> Faz com que ele só pegue o último clique do botão
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
])