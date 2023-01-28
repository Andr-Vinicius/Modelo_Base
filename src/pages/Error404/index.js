import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Erro } from "./styled";
import {Paragrafo} from '../Login/styled';
import {toast} from 'react-toastify'


export default function Error404(){
  toast.error('Volte para a página anterior!')
  return(
    <Container>
      <Erro>ESSA PÁGINA NÃO EXISTE!!!</Erro>
      <Paragrafo>
        Infelizmente a página que você procura não existe ainda, 
        clique no "inicio" para voltar para a página anterior.
      </Paragrafo>
    </Container>
  )
}
