const DrumPad = ({ pad, setDisplayText, useEffect }) => {
  const playAudio = () => {
    stopAudio();
    setDisplayText(pad.id);
    document.getElementById(pad.name).play();
  };

  const stopAudio = () => {
    let allAudios = document.querySelectorAll('.clip');
    allAudios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (event.key === pad.name.toLowerCase()) {
        console.log(event.key);
        playAudio();
      }
    });

    return () => {
      window.removeEventListener('keydown', event => {
        if (event.key === pad.name.toLowerCase()) {
          console.log(event.key);
          playAudio();
        }
      });
    };
  });

  return (
    <button
      className='drum-pad'
      id={pad.id}
      onClick={() => {
        playAudio();
      }}
    >
      <h2>{pad.name}</h2>
      <audio src={pad.audio} className='clip' id={pad.name}></audio>
    </button>
  );
};

export default DrumPad;
