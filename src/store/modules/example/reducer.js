import * as types from '../types';

// Estado inicial: o botão não vai estar clicado
const initialState = {
  botaoClicado: false,
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  // switch básico analisando qual action está recebendo
  switch(action.type){
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('SUCESSO')
      const newState = {...state}; // NUNCA MANIPULAR O ESTADO ATUAL DA APLICAÇÃO, copia pro newState
      newState.botaoClicado = !newState.botaoClicado; // Se for true vira false, e vice e versa
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE:{
      console.log('REQUISIÇÃO FALHOU');
      return state; // Retorna apenas o estado que já estava
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('ESTOU FAZENDO A REQUISIÇÃO'); // Retorna apenas o estado que já estava
      return state;
    }

    default:
      return state;
  }
}