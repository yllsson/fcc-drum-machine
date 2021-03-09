import React, { useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import kyle from '../audio/kylesImage.jpg';

function App() {
  const [pads, setPads] = useState([
    {
      name: 'Q',
      key: '',
      audio: '../audio/clap-808.wav',
      id: 'clap',
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
            return <DrumPad pad={pad} key={pad.key} setPads={setPads} />;
          })}
        </div>

        <Display />
      </section>
      <img width='200px' src={kyle} alt='hello'></img>
    </main>
  );
}

export default App;
