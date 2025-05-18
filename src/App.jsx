import React from "react";
import Grafo from "./componentes/Grafo";
import FiltroCiudad from "./componentes/FiltroCiudad";

function App() {
  return (
    <div>
      <h1>Grafo de Personas y Ciudades</h1>
      <FiltroCiudad />
      <Grafo />
    </div>
  );
}

export default App;