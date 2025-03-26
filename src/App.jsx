import React, { useState } from 'react';
import mockQueue from './data/mockData';
import PersonForm from './components/personForm';
import QueueList from './components/queueList';

function App() {
  const [queue, setQueue] = useState(mockQueue);

  const agregarPersona = (nuevaPersona) => {
    const nuevaCola = [...queue, { ...nuevaPersona, id: queue.length + 1 }];
    setQueue(nuevaCola);
  };

  return (
    <div className="App">
      <h1>Cola de Personas en el Cajero</h1>
      <PersonForm agregarPersona={agregarPersona} />
      <QueueList queue={queue} />
    </div>
  );
}

export default App;
