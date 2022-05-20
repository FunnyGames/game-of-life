import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import GameScreen from './screens/GameScreen';

function App() {
  return (
    <ErrorBoundary>
      <GameScreen />
    </ErrorBoundary>
  );
}

export default App;
