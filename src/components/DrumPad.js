const DrumPad = ({ pad }) => {
  const playAudio = () => {
    document.getElementById(pad.name).play();
    console.log(document.getElementById(pad.name));
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
