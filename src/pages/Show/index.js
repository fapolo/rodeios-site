import React, { useState, useEffect } from "react";
import ResultLine from "../../components/ResultLine";

import api from "../../config/api";

import "./styles.css";

export default function Show({ match }) {
  const [rodeio, setRodeio] = useState({});
  const [organizador, setOrganizador] = useState({});
  const [resultado, setResultado] = useState([]);
  const { rodeio_id } = match.params;

  async function loadDados() {
    const response = await api.get(`/rodeios/${rodeio_id}`);
    setRodeio(response.data);
    setOrganizador(response.data.organizador);
    setResultado(response.data.resultado);
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
          <strong>Organizado por:</strong> {organizador.nome} -{" "}
          {organizador.cidade} {organizador.rt}RT
        </p>
      </div>
      <div className='dados-container'>
        {resultado.map(section => (
          <div className='dados-section' key={section._id}>
            <h2 className='section-title'>{section.modalidade}</h2>
            <div className='section-resultado'>
              {section.dados.map((entidade, index) => (
                <ResultLine key={entidade._id} props={entidade} pos={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
