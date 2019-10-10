import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default function Navbar() {
  return (
    <div className='menu-container'>
      <Link to='/'>
        <img src={logo} alt='Site dos Rodeios' className='logo' />
      </Link>
      <input className='search' type='text' placeholder='Pesquisar Rodeio...' />
      <ul className='menu'>
        <li className='menu-item'>
          <Link to='/send'>Enviar Resultado</Link>
        </li>
        <li className='menu-item'>
          <Link to='/about'>Sobre</Link>
        </li>
      </ul>
    </div>
  );
}
