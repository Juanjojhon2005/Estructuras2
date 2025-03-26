import React from 'react';

export default function QueueList({ queue }) {
  return (
    <ul>
      {queue.map((persona, index) => (
        <li key={index}>
          {persona.nombre} - ${persona.monto}
        </li>
      ))}
    </ul>
  );
}
