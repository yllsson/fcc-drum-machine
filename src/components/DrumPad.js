const DrumPad = ({ pad, setDisplayText, useEffect }) => {
  const playAudio = () => {
    stopAudio();
    setDisplayText(pad.id + '!');
    const audioElement = document.getElementById(pad.name);
    let playPromise = audioElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {})
        .catch((error) => {
          // console.log('');
        });
    }
  };

  const stopAudio = () => {
    let allAudios = document.querySelectorAll('.clip');
    allAudios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.code === pad.code) {
        playAudio();
      }
    });

    return () => {
      window.removeEventListener('keydown', (event) => {
        if (event.code === pad.code) {
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
