import React from "react";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default function() {
  return (
    <div className='menu-container'>
      <img src={logo} alt='Site dos Rodeios' className='logo' />
      <input className='search' type='text' placeholder='Pesquisar Rodeio...' />
      <ul className='menu'>
        <li className='menu-item'>
          <a href='#'>Enviar Resultado</a>
        </li>
        <li className='menu-item'>
          <a href='#'>Sobre</a>
        </li>
      </ul>
    </div>
  );
}
