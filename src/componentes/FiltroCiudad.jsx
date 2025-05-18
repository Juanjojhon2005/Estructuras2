import React, { useState } from "react";
import { personas } from "../datos/datosGrafo";

export default function FiltroCiudad() {
  const [ciudad, setCiudad] = useState("");
  const filtradas = personas.filter(p => p.ciudad.toLowerCase() === ciudad.toLowerCase());

  return (
    <div>
      <h2>Personas que viven en una ciudad</h2>
      <input
        type="text"
        placeholder="Escribe el nombre de la ciudad"
        value={ciudad}
        onChange={e => setCiudad(e.target.value)}
      />
      <ul>
        {filtradas.map(p => (
          <li key={p.id}>
            {p.id} ({p.edad} años)
          </li>
        ))}
      </ul>
    </div>
  );
}