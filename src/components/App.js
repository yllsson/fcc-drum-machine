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
  tom
} from './audioImports';

function App() {
  const [pads, setPads] = useState([
    {
      name: 'Q',
      key: '',
      audio: clap,
      id: 'Clap'
    },
    {
      name: 'W',
      key: '',
      audio: crash,
      id: 'Crash'
    },
    {
      name: 'E',
      key: '',
      audio: kickH,
      id: 'Kick'
    },
    {
      name: 'A',
      key: '',
      audio: shaker,
      id: 'Shaker'
    },
    {
      name: 'S',
      key: '',
      audio: snareB,
      id: 'Snare'
    },
    {
      name: 'D',
      key: '',
      audio: tom,
      id: 'Tom'
    },
    {
      name: 'Z',
      key: '',
      audio: laser,
      id: 'Laser'
    },
    {
      name: 'X',
      key: '',
      audio: punch,
      id: 'Punch'
    },
    {
      name: 'C',
      key: '',
      audio: tick,
      id: 'Tick'
    }
  ]);
  const [displayText, setDisplayText] = useState('hello');

  return (
    <main className='App' id='drum-machine'>
      <section className='container'>
        <div className='drum'>
          {pads.map((pad, idx) => {
            pad.key = idx;
            return (
              <DrumPad
                pad={pad}
                key={pad.key}
                setPads={setPads}
                setDisplayText={setDisplayText}
              />
            );
          })}
        </div>

        <Display displayText={displayText} />
      </section>
    </main>
  );
}

export default App;
