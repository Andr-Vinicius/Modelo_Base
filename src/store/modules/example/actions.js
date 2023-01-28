import * as types from '../types'

/* Definição das ações possiveis, com a de requisição e sucesso/falha, 
essas funções retornam um type recebendo o types do tipo daquela ação, a request será a base no reducer
*/
export function clicaBotaoRequest(){
  return{
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaBotaoSuccess(){
  return{
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaBotaoFailure(){
  return{
    type: types.BOTAO_CLICADO_FAILURE,
  };
}