import React, { useState } from 'react';
import FirstApp from './FirstApp';
import Challenge from './Challenge';
import Father from './father';

function App() {
  const [view, setView] = useState('counter'); // Estado para controlar la vista

  return (
    <div>
      {view === 'counter' && <FirstApp value={10} />}
      {view === 'challenge' && <Challenge />}
      {view === 'father' && <Father />}

      <button onClick={() => setView('counter')}>Ver Contador</button>
      <button onClick={() => setView('challenge')}>Ir al Challenge</button>
      <button onClick={() => setView('father')}>Ver Father</button>
    </div>
  );
}

export default App;
