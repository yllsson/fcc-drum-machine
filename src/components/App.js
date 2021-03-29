import React, { useEffect, useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import allPads from './allPads';

function App() {
  const [pads, setPads] = useState(allPads);
  const [displayText, setDisplayText] = useState(`Welcome to my Drum Machine!`);

  const change = () => {
    const message = document.getElementById('message');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        message.classList.remove('visible');
      }, 1250);
      setTimeout(resolve, 2250);
    }).then(() => {
      setDisplayText('Press any key to play!');
      message.classList.add('visible');
    });
  };

  useEffect(() => {
    change();
  }, []);

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
