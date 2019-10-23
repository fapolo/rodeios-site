import React from "react";

import "./styles.css";

export default function Card({ props }) {
  const { nome, entidade, resultado } = props;
  const ano = new Date(props.data).getFullYear();
  const dia = new Date(props.data).getDate();
  let mes = new Date(props.data).getMonth();
  if (mes === 1) mes = "Janeiro";
  if (mes === 2) mes = "Fevereiro";
  if (mes === 3) mes = "Março";
  if (mes === 4) mes = "Abril";
  if (mes === 5) mes = "Maio";
  if (mes === 6) mes = "Junho";
  if (mes === 7) mes = "Julho";
  if (mes === 8) mes = "Agosto";
  if (mes === 9) mes = "Setembro";
  if (mes === 10) mes = "Outubro";
  if (mes === 11) mes = "Novembro";
  if (mes === 12) mes = "Dezembro";

  return (
    <div className='card-container'>
      <h1>{nome}</h1>
      <div className='card-textarea'>
        <p>
          <strong>Data</strong>: {dia} de {mes} de {ano}
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
