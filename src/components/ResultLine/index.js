import React, { useState, useEffect } from "react";

import api from "../../config/api";

import "./styles.css";

export default function ResultLine({ props, pos }) {
  const [entidade, setEntidade] = useState("");
  const {
    correcao,
    harmonia,
    interpretacao,
    desconto,
    musica,
    final
  } = props;

  useEffect(() => {
    async function getEntidade(id) {
      const response = await api.get(`/entidades/${id}`);
      setEntidade(response.data.nome);
    }

    getEntidade(props.entidade.id);

    //eslint-disable-next-line
  }, []);

  function expandComplete(id) {
    const completeResult = document.getElementById(id);
    completeResult.classList.toggle("hide");
  }

  return (
    <div className='result-line-container'>
      <p className='result-line-highlight'>
        <span className='result-pos'>{pos + 1}</span>
        <span className='result-name'>{entidade}</span>
        <span className='grade-highlight'>{final.toFixed(3)}</span>
        <span className='result-expander' onClick={() => expandComplete(props.entidade.id)}>
          {"<"}
        </span>
      </p>
      <div className='result-line-complete hide' id={props.entidade.id}>
        <p>
          <strong>COR</strong>
          <span>{correcao.toFixed(3)}</span>
        </p>
        <p>
          <strong>HAR</strong>
          <span>{harmonia.toFixed(3)}</span>
        </p>
        <p>
          <strong>INT</strong>
          <span>{interpretacao.toFixed(3)}</span>
        </p>
        <p>
          <strong>MUS</strong>
          <span>{musica.toFixed(3)}</span>
        </p>
        <p>
          <strong>DESC</strong>
          <span>{desconto.toFixed(3)}</span>
        </p>
      </div>
    </div>
  );
}
