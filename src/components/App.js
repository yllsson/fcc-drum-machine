import React, { useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import {
  clap,
  crash,
  kickH,
  laser,
  punch,
  shaker,
  snareB,
  tick,
  tom,
} from './audioImports';

function App() {
  const [pads, setPads] = useState([
    {
      name: 'Q',
      key: '',
      audio: clap,
      id: 'clap',
    },
    {
      name: 'W',
      key: '',
      audio: crash,
      id: 'description of audioFile',
    },
    {
      name: 'E',
      key: '',
      audio: kickH,
      id: 'description of audioFile',
    },
    {
      name: 'A',
      key: '',
      audio: shaker,
      id: 'description of audioFile',
    },
    {
      name: 'S',
      key: '',
      audio: snareB,
      id: 'description of audioFile',
    },
    {
      name: 'D',
      key: '',
      audio: tom,
      id: 'description of audioFile',
    },
    {
      name: 'Z',
      key: '',
      audio: laser,
      id: 'description of audioFile',
    },
    {
      name: 'X',
      key: '',
      audio: punch,
      id: 'description of audioFile',
    },
    {
      name: 'C',
      key: '',
      audio: tick,
      id: 'description of audioFile',
    },
  ]);

  return (
    <main className='App' id='drum-machine'>
      <section className='container'>
        <div className='drum'>
          {pads.map((pad, idx) => {
            pad.key = idx;
            return <DrumPad pad={pad} key={pad.key} setPads={setPads} />;
          })}
        </div>

        <Display />
      </section>
    </main>
  );
}

export default App;
