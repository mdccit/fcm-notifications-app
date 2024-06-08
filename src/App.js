import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [gameState, setGameState] = useState('waiting');
  const [result, setResult] = useState(null);

  const startGame = () => {
    setGameState('playing');
    // Simulate game logic
    setTimeout(() => {
      const outcome = Math.random() > 0.5 ? 'win' : 'lose';
      setGameState('waiting');
      setResult(outcome);
    }, 3000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aviator Game</h1>
        {gameState === 'waiting' ? (
          <>
            <button onClick={startGame}>Start Game</button>
            {result && <p>You {result}!</p>}
          </>
        ) : (
          <p>Game in progress...</p>
        )}
      </header>
    </div>
  );
};

export default App;
