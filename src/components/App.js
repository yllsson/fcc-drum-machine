import React, { useEffect, useState } from "react";
import Display from "./Display";
import DrumPads from "./DrumPads";
import allPads from "./allPads";

function App() {
  const [pads, setPads] = useState(null);
  const [displayText, setDisplayText] = useState(`Welcome to my Drum Machine!`);

  useEffect(() => {
    setTimeout(() => {
      setPads(allPads);
      setDisplayText("Press any key to play!");
    }, 2250);
  }, []);

  return (
    <main className="App" id="drum-machine">
      <section className="container">
        <div className="drum">
          {pads && pads !== null && (
            <DrumPads pads={pads} setDisplayText={setDisplayText} />
          )}
        </div>

        <Display displayText={displayText} />
      </section>
    </main>
  );
}

export default App;
