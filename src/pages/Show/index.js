import React, { useState, useEffect } from "react";
import ResultLine from "../../components/ResultLine";

import api from "../../config/api";

import "./styles.css";

export default function Show({ match }) {
  const [rodeio, setRodeio] = useState({});
  const [entidade, setEntidade] = useState({});
  const [resultado, setResultado] = useState([]);
  const { rodeio_id } = match.params;

  async function loadDados() {
    const foundRodeio = await api.get(`/rodeios/${rodeio_id}`);
    const foundEntidade = await api.get(`/entidades/${foundRodeio.data.entidade.id}`);
    setRodeio(foundRodeio.data);
    setEntidade(foundEntidade.data);
    setResultado(foundRodeio.data.resultado);
  }

  useEffect(() => {
    loadDados();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='resultado-container'>
      <div className='header'>
        <h1>{rodeio.nome}</h1>
        <p>
          <strong>Organizado por:</strong> {entidade.nome} -{" "}
          {entidade.cidade} {entidade.rt}RT
        </p>
      </div>
      <div className='dados-container'>
        {resultado.map(section => (
          <div className='dados-section' key={section._id}>
            <h2 className='section-title'>{section.modalidade}</h2>
            <div className='section-resultado'>
              {section.dados.map((entrada, index) => (
                <ResultLine key={entrada.entidade.id} props={entrada} pos={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
