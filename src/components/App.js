import React, { useEffect, useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import allPads from './allPads';

function App() {
  const [pads, setPads] = useState(allPads);
  const [displayText, setDisplayText] = useState('Press any key to play');

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
                useEffect={useEffect}
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
