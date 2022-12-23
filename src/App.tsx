import './App.scss';
import React from 'react';
import Fretboard from './components/Fretboard/Fretboard';

function App() {
  return (
    <div className="App">
      <div className="fretboardWrapper">
        <Fretboard></Fretboard>
      </div>
    </div>
  );
}

export default App;
