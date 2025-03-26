import React, { useState } from 'react';

export default function PersonForm({ agregarPersona }) {
  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && monto) {
      agregarPersona({ nombre, monto: parseFloat(monto) });
      setNombre('');
      setMonto('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Monto a retirar"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        required
      />
      <button type="submit">Agregar a la cola</button>
    </form>
  );
}
  