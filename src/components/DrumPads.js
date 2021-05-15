import React, { useEffect, useState } from "react";

const DrumPads = ({ pads, setDisplayText }) => {
  const [currentPad, setCurrentPad] = useState(null);

  const stopAudio = async () => {
    const audio = document.getElementById(currentPad);
    await audio.pause();
    resetAudio(audio);
    return;
  };

  const resetAudio = (audio) => {
    return (audio.currentTime = 0);
  };

  const playAudio = async (hitPad) => {
    setDisplayText(hitPad.id + "!");
    setCurrentPad(hitPad.name);
    await document.getElementById(hitPad.name).play();
    return;
  };

  const handleKeyPress = async (event) => {
    const validKey = pads.find((pad) => event.key.toUpperCase() === pad.name);
    if (validKey) {
      if (currentPad !== null) {
        await stopAudio();
        playAudio(validKey, "audio");
      } else {
        playAudio(validKey, "audio");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pads.map((pad) => (
        <button
          className="drum-pad"
          key={pad.id}
          id={pad.id}
          onClick={async () => {
            if (currentPad !== null) {
              await stopAudio();
              playAudio(pad, "audio");
            } else {
              playAudio(pad, "audio");
            }
          }}
        >
          <h2>{pad.name}</h2>
          <audio src={pad.audio} className="clip" id={pad.name}></audio>
        </button>
      ))}
    </>
  );
};

export default DrumPads;
