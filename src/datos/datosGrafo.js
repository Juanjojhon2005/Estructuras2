export const personas = [
  { id: "Ana", edad: 25, ciudad: "Cali" },
  { id: "Luis", edad: 30, ciudad: "Bogotá" },
  { id: "Sofía", edad: 28, ciudad: "Cali" }
];

export const ciudades = [
  { id: "Cali" },
  { id: "Bogotá" }
];

export const enlaces = personas.map(persona => ({
  source: persona.id,
  target: persona.ciudad
}));

export const grafo = {
  nodes: [
    ...personas.map(p => ({ id: p.id, color: "skyblue" })),
    ...ciudades.map(c => ({ id: c.id, color: "orange" }))
  ],
  links: enlaces
};