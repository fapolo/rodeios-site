import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-section'>
        <p>&copy; 2019 Fabrício Polo</p>
        <p>
          Os resultados presentes neste portal são de responsabilidade dos
          usuários que fizeram o envio.
        </p>
      </div>
      <div className='footer-section'>
        <Link to='/'>
          <img src={logo} alt='Site dos Rodeios' />
        </Link>
      </div>
    </div>
  );
}
