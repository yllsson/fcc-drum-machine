import React, { useEffect, useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

function App() {
  const [pads, setPads] = useState([
    {
      name: 'Q',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'W',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'E',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'A',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'S',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'D',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'Z',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'X',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
    {
      name: 'C',
      key: '',
      audio: 'URL to audioFile',
      id: 'description of audioFile',
    },
  ]);

  return (
    <main className='App' id='drum-machine'>
      <section className='container'>
        <div className='drum'>
          {pads.map((pad, idx) => {
            pad.key = idx;
            return <DrumPad pad={pad} key={pad.key} />;
          })}
        </div>

        <Display />
      </section>
    </main>
  );
}

export default App;
