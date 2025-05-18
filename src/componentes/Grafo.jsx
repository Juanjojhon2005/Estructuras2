import React from "react";
import { Graph } from "react-d3-graph";
import { grafo } from "../datos/datosGrafo";

export default function Grafo() {
  const configuracion = {
    nodeHighlightBehavior: true,
    node: { color: "lightgreen", size: 400, highlightStrokeColor: "blue" },
    link: { highlightColor: "lightblue" },
    directed: true
  };

  return <Graph id="grafo-personas-ciudades" data={grafo} config={configuracion} />;
}