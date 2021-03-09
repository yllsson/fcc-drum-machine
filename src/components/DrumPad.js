const DrumPad = ({ pad }) => {
  const playAudio = () => {
    stopAudio();
    document.getElementById(pad.name).play();
  };

  const stopAudio = () => {
    let allAudios = document.querySelectorAll('.clip');
    allAudios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

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
