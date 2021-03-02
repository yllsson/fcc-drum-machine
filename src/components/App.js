import React, { useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

function App() {
  const [padNames, setPadNames] = useState([
    'Q',
    'W',
    'E',
    'A',
    'S',
    'D',
    'Z',
    'X',
    'C',
  ]);

  return (
    <main className='App' id='drum-machine'>
      <h1>Welcome to my drum machine</h1>
      {padNames.map((pad, idx) => {
        return <DrumPad name={pad} setPadNames={setPadNames} key={idx} />;
      })}
      <Display />
    </main>
  );
}

export default App;
