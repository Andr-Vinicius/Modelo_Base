import React from "react";
import { Nav, Elemento } from "./styled";
import {FaSignInAlt, FaUserAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



export default function Header(){
  // Pegando valores do estado através do hook useSelector
  const botaoClicado = useSelector(state => state.exampleReducer.botaoClicado)
  return (
    <Nav>
      {/* Usamos o Link com o atributo to ao invés da tag <a> */}
      <Link to="/">Inicio</Link>
      <Link to="/login">Sobre</Link>
      <Link to="#">
      {/* Icones importados do react-icons */}
      <FaSignInAlt className="icon" size={20} color={'white'} />
      </Link>
      <Link to="#">
      <FaUserAlt className="icon" size={18} color={'white'}/>
      </Link>
      {/* Controle através de true/false */}
      <Elemento>{botaoClicado ? 'CLICADO': 'NÃO CLICADO'}</Elemento>
    </Nav>
  )
}
