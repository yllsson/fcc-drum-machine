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
    'C'
  ]);

  return (
    <main className='App' id='drum-machine'>
      <h1 id='display'>Hello world</h1>
      {padNames.map((pad, idx) => {
        console.log(padNames);

        console.log(idx, pad[idx]);
        return (
          <DrumPad
            name={`${pad[idx]}`}
            setPadNames={setPadNames}
            key={`hello${idx}`}
          />
        );
      })}
      <DrumPad name='hello' />
    </main>
  );
}

export default App;
