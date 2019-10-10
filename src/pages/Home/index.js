import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/Card";
import api from "../../config/api";

import "./styles.css";

export default function Home() {
  const [rodeios, setRodeios] = useState([]);

  async function loadRodeios() {
    const response = await api.get("/rodeios");
    setRodeios(response.data);
  }

  useEffect(() => {
    loadRodeios();
  }, [])

  return (
    <div className="home-container">
      <div className="header-container">
        <p><strong>Últimos resultados adicionados</strong></p>
        <Link to="/">Ver todos >>></Link>
      </div>
      <div className="rodeios-container">
        {rodeios.map(rodeio => <Card props={rodeio} key={rodeio._id} />)}
        {rodeios.map(rodeio => <Card props={rodeio} key={rodeio._id} />)}
      </div>
    </div>
  );
}
