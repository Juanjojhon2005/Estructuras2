import React, { useState } from 'react';
import FirstApp from './FirstApp';
import Challenge from './Challenge';

function App() {
  const [showChallenge, setShowChallenge] = useState(false);

  return (
    <div>
      {showChallenge ? <Challenge /> : <FirstApp value={10} />}
      <button onClick={() => setShowChallenge(!showChallenge)}>
        {showChallenge ? 'Volver a el contador' : 'Irse al challenge'}
      </button>
    </div>
  );
}

export default App;