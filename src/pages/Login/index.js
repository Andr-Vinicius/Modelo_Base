import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Title, Paragrafo} from './styled';
import { Container } from '../../styles/GlobalStyles';


//import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions'

export default function Login(){
  const dispatch = useDispatch(); // Disparador de ações

  function handleClick(e){
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  /* Função é executada quando o componente é montado
  Parecido com o componentDidMount() */
  useEffect(() => {
    async function getData(){
      //const response = await axios.get('/users');
      //console.log(response);
      //const {data} = response;
      //console.log(data)
    }
    getData();
  }, []);

  return (
    <Container>
      <Title>Página de Login</Title>
      <Paragrafo>
      Faça o seu login logo abaixo...
      </Paragrafo>
      <button  onClick={handleClick}>Clique aqui</button>
    </Container>
  )
}
