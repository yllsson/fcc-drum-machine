import React, { useState } from 'react';
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
      <h1 id='display'>Hello world</h1>
      {padNames.map((pad) => {
        return <DrumPad name={pad} setPadNames={setPadNames} key={pad} />;
      })}
      <DrumPad name='hello' />
    </main>
  );
}

export default App;
