import React from "react";

import "./styles.css";

export default function Card({ props }) {
  const { nome, entidade, resultado } = props;

  return (
    <div className='card-container'>
      <h1>{nome}</h1>
      <div className='card-textarea'>
        <p>
          <strong>Data</strong>: 2019
        </p>
        <p>
          <strong>Organizador</strong>: {entidade.nome}
        </p>
        <p>
          <strong>Modalidades</strong>:
        </p>
        <ul>
          {resultado.map(entry => (
            <li key={entry.modalidade}>- {entry.modalidade}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
